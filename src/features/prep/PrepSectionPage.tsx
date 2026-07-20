import { Alert, Box, Paper, Snackbar, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { Navigate, useParams } from 'react-router-dom'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { CalmButton } from '../../components/shared/CalmButton'
import { CalmTextArea } from '../../components/shared/CalmTextArea'
import { Disclaimer } from '../../components/shared/Disclaimer'
import { LoadingState } from '../../components/shared/LoadingState'
import { COPY } from '../../constants/copy'
import { buildJournalEntries, formatJournalForPrep } from '../journal/journalUtils'
import { readStoreSnapshot } from '../../services/storage'
import { generatePrepReflection } from '../../services/prep'
import type { PrepReflection } from '../../services/prep'
import { formatPrepSummary } from './prepPrompts'
import { getPrepPrompt, getPrepSection, type PrepSectionId } from './prepSections'
import { usePrepAnswers } from './usePrepAnswers'

const VALID_SECTIONS: PrepSectionId[] = ['my-story', 'patterns', 'timeline']

function isPrepSectionId(id: string): id is PrepSectionId {
  return VALID_SECTIONS.includes(id as PrepSectionId)
}

export function PrepSectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>()
  const section = sectionId ? getPrepSection(sectionId) : undefined

  if (!sectionId || !section || !isPrepSectionId(sectionId)) {
    return <Navigate to="/prep" replace />
  }

  return <PrepSectionContent sectionId={sectionId} section={section} />
}

function PrepSectionContent({
  sectionId,
  section,
}: {
  sectionId: PrepSectionId
  section: NonNullable<ReturnType<typeof getPrepSection>>
}) {
  const store = readStoreSnapshot()
  const journalEntries = buildJournalEntries(store.dumps, store.responses)
  const journalText = formatJournalForPrep(journalEntries)

  const { answers, updateAnswer, handleSave, saved } = usePrepAnswers()
  const [reflection, setReflection] = useState<PrepReflection | null>(null)
  const [copied, setCopied] = useState(false)

  const reflectMutation = useMutation({
    mutationFn: () => generatePrepReflection(journalText),
    onSuccess: setReflection,
  })

  const sectionHasContent = section.promptIds.some((id) => (answers[id] ?? '').trim().length > 0)
  const hasAnyContent = Object.entries(answers).some(
    ([key, v]) => !key.startsWith('_') && v.trim().length > 0,
  )

  async function handleExport() {
    const summary = formatPrepSummary(answers, reflection)
    if (!summary.trim()) return
    try {
      await navigator.clipboard.writeText(summary)
      setCopied(true)
    } catch {
      // clipboard unavailable
    }
  }

  function onSave() {
    handleSave(reflection ?? undefined)
  }

  return (
    <ToolScreenLayout title={section.title} subtitle={section.description} backTo="/prep">
      <Disclaimer />

      {section.showReflect && journalEntries.length > 0 && (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mb: 3 }}>
          {reflectMutation.isPending && <LoadingState message={COPY.prepReflecting} />}
          {reflectMutation.isError && (
            <Alert severity="error">
              {reflectMutation.error instanceof Error ? reflectMutation.error.message : COPY.emptyState}
            </Alert>
          )}
          {reflection && (
            <Paper sx={{ p: 2.5, display: 'flex', flexDirection: 'column', gap: 1.5 }}>
              <Typography variant="body2" color="text.secondary">
                {reflection.observation}
              </Typography>
              <Typography variant="body1" sx={{ fontWeight: 500 }}>
                {reflection.question}
              </Typography>
            </Paper>
          )}
          {!reflectMutation.isPending && (
            <CalmButton variant="outlined" onClick={() => reflectMutation.mutate()} sx={{ alignSelf: 'flex-start' }}>
              {COPY.prepReflect}
            </CalmButton>
          )}
        </Box>
      )}

      {sectionId === 'timeline' ? (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {journalEntries.length === 0 ? (
            <Typography variant="body2" color="text.secondary">
              {COPY.prepTimelineEmpty}
            </Typography>
          ) : (
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
              {[...journalEntries].reverse().map((entry) => (
                <Paper key={entry.dumpId} sx={{ p: 2 }}>
                  <Typography variant="caption" color="text.secondary" sx={{ display: 'block', mb: 0.5 }}>
                    {entry.dateLabel}
                  </Typography>
                  <Typography variant="body1" sx={{ fontWeight: 600, mb: 0.5 }}>
                    {entry.oneThing}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {entry.dumpPreview}
                  </Typography>
                </Paper>
              ))}
            </Box>
          )}
          <Box component="section">
            <Typography variant="body1" sx={{ fontWeight: 600, mb: 1.5, lineHeight: 1.5 }}>
              {COPY.prepTimelineNote}
            </Typography>
            <CalmTextArea
              value={answers.timeline_note ?? ''}
              onChange={(e) => updateAnswer('timeline_note', e.target.value)}
              minRows={3}
              placeholder=""
              slotProps={{ htmlInput: { 'aria-label': COPY.prepTimelineNote } }}
            />
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3 }}>
          {section.promptIds.map((promptId) => {
            const prompt = getPrepPrompt(promptId)
            if (!prompt) return null
            return (
              <Box key={promptId} component="section">
                <Typography variant="body1" sx={{ fontWeight: 600, lineHeight: 1.5, mb: 1, wordBreak: 'break-word' }}>
                  {prompt.label}
                </Typography>
                <Typography variant="body2" color="text.secondary" sx={{ mb: 1.5, lineHeight: 1.6 }}>
                  {prompt.placeholder}
                </Typography>
                <CalmTextArea
                  value={answers[promptId] ?? ''}
                  onChange={(e) => updateAnswer(promptId, e.target.value)}
                  minRows={4}
                  placeholder=""
                  slotProps={{ htmlInput: { 'aria-label': prompt.label } }}
                />
              </Box>
            )
          })}
        </Box>
      )}

      <Box
        sx={{
          display: 'flex',
          gap: 1.5,
          pt: 3,
          pb: 4,
          '& .MuiButton-root': { flex: 1 },
        }}
      >
        <CalmButton variant="contained" onClick={onSave} disabled={!sectionHasContent && !hasAnyContent}>
          Save
        </CalmButton>
        <CalmButton variant="outlined" onClick={handleExport} disabled={!hasAnyContent}>
          Copy summary
        </CalmButton>
      </Box>

      {saved && <Alert severity="success">Saved on this device.</Alert>}

      <Snackbar open={copied} autoHideDuration={3000} onClose={() => setCopied(false)} message="Summary copied" />
    </ToolScreenLayout>
  )
}
