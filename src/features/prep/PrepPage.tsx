import { Alert, Box, Paper, Snackbar, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useState } from 'react'
import { CalmButton } from '../../components/shared/CalmButton'
import { CalmTextArea } from '../../components/shared/CalmTextArea'
import { Disclaimer } from '../../components/shared/Disclaimer'
import { LoadingState } from '../../components/shared/LoadingState'
import { ScreenShell } from '../../components/shared/ScreenShell'
import { COPY } from '../../constants/copy'
import { buildJournalEntries, formatJournalForPrep } from '../journal/journalUtils'
import { readStoreSnapshot, getLatestPrepNote, savePrepNote } from '../../services/storage'
import { generatePrepReflection } from '../../services/prep'
import type { PrepReflection } from '../../services/prep'
import { formatPrepSummary, prepPrompts } from './prepPrompts'

function buildInitialAnswers(): Record<string, string> {
  const latest = getLatestPrepNote()
  if (latest) return { ...latest.content }
  return Object.fromEntries(prepPrompts.map((p) => [p.id, '']))
}

export function PrepPage() {
  const store = readStoreSnapshot()
  const journalEntries = buildJournalEntries(store.dumps, store.responses)
  const journalText = formatJournalForPrep(journalEntries)

  const [answers, setAnswers] = useState(buildInitialAnswers)
  const [reflection, setReflection] = useState<PrepReflection | null>(null)
  const [saved, setSaved] = useState(false)
  const [copied, setCopied] = useState(false)

  const reflectMutation = useMutation({
    mutationFn: () => generatePrepReflection(journalText),
    onSuccess: setReflection,
  })

  function updateAnswer(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    setSaved(false)
  }

  function handleSave() {
    savePrepNote({ ...answers, _reflection_observation: reflection?.observation ?? '', _reflection_question: reflection?.question ?? '' })
    setSaved(true)
  }

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

  const hasContent = Object.values(answers).some((v) => v.trim().length > 0) || reflection

  return (
    <ScreenShell title={COPY.prepTitle} subtitle={COPY.prepSubtitle}>
      <Disclaimer />

      {journalEntries.length === 0 ? (
        <Typography variant="body2" color="text.secondary">
          {COPY.prepNoJournal}
        </Typography>
      ) : (
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {reflectMutation.isPending ? (
            <LoadingState message={COPY.prepReflecting} />
          ) : (
            <CalmButton
              variant="outlined"
              onClick={() => reflectMutation.mutate()}
              disabled={reflectMutation.isPending}
            >
              {COPY.prepReflect}
            </CalmButton>
          )}
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
        </Box>
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, mt: 2 }}>
        {prepPrompts.map((prompt) => (
          <CalmTextArea
            key={prompt.id}
            label={prompt.label}
            placeholder={prompt.placeholder}
            value={answers[prompt.id] ?? ''}
            onChange={(e) => updateAnswer(prompt.id, e.target.value)}
            minRows={3}
          />
        ))}
      </Box>

      {saved && <Alert severity="success">Saved on this device.</Alert>}

      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5 }}>
        <CalmButton variant="contained" onClick={handleSave} disabled={!hasContent}>
          Save
        </CalmButton>
        <CalmButton variant="outlined" onClick={handleExport} disabled={!hasContent}>
          Copy summary
        </CalmButton>
      </Box>

      <Snackbar open={copied} autoHideDuration={3000} onClose={() => setCopied(false)} message="Summary copied" />
    </ScreenShell>
  )
}
