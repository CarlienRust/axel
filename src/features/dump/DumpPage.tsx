import { Alert, Box, Paper } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useState, type FormEvent } from 'react'
import { useNavigate } from 'react-router-dom'
import { CircularMicButton } from '../../components/brand/CircularMicButton'
import {
  VoiceTextToggle,
  WaveformDecoration,
  type InputMode,
} from '../../components/brand/VoiceTextToggle'
import { CalmButton } from '../../components/shared/CalmButton'
import { CalmTextArea } from '../../components/shared/CalmTextArea'
import { CenteredScreen } from '../../components/shared/CenteredScreen'
import { LoadingState } from '../../components/shared/LoadingState'
import { PageHeader } from '../../components/layout/PageLayout'
import { COPY } from '../../constants/copy'
import { useVoiceInput } from '../../hooks/useVoiceInput'
import { generateOneThing } from '../../services/gemini'
import { createDump, createResponse } from '../../services/storage'
import { serializeAxelAiResponse } from '../../types/gemini'

export function DumpPage() {
  const navigate = useNavigate()
  const [content, setContent] = useState('')
  const [mode, setMode] = useState<InputMode>('voice')

  const appendVoice = useCallback((text: string) => {
    setContent((prev) => (prev ? `${prev} ${text}` : text))
  }, [])

  const { supported, isListening, toggle } = useVoiceInput(appendVoice)

  const mutation = useMutation({
    mutationFn: async (brainDumpContent: string) => {
      const aiResponse = await generateOneThing(brainDumpContent)
      const dump = createDump(brainDumpContent)
      createResponse(dump.id, serializeAxelAiResponse(aiResponse))
      return dump.id
    },
    onSuccess: (dumpId) => {
      navigate(`/response/${dumpId}`, { state: { fromDump: true } })
    },
  })

  const canSubmit = content.trim().length > 0 && !mutation.isPending

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (canSubmit) mutation.mutate(content.trim())
  }

  if (mutation.isPending) {
    return (
      <CenteredScreen showCrisisLink>
        <LoadingState />
      </CenteredScreen>
    )
  }

  return (
    <CenteredScreen showCrisisLink align="top">
      <PageHeader title={COPY.brainDumpTitle} />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, minHeight: 'calc(100vh - 200px)' }}
      >
        {mode === 'voice' ? (
          <Box
            sx={{
              flex: 1,
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              gap: 4,
              py: 4,
            }}
          >
            <WaveformDecoration active={isListening} />
            <CircularMicButton
              isListening={isListening}
              onClick={toggle}
              disabled={!supported}
            />
            {content.trim().length > 0 && (
              <Paper sx={{ p: 2, width: '100%', bgcolor: 'background.paper' }}>
                <CalmTextArea
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                  minRows={3}
                  slotProps={{
                    htmlInput: { 'aria-label': COPY.brainDumpTitle },
                  }}
                />
              </Paper>
            )}
          </Box>
        ) : (
          <Paper sx={{ p: 0.5, bgcolor: 'background.paper' }}>
            <CalmTextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              minRows={14}
              placeholder=""
              slotProps={{
                htmlInput: { 'aria-label': COPY.brainDumpTitle },
              }}
              sx={{ '& .MuiOutlinedInput-root fieldset': { border: 'none' } }}
            />
          </Paper>
        )}

        {!supported && mode === 'voice' && (
          <Alert severity="info" sx={{ py: 0.5 }}>
            {COPY.voiceUnsupported}
          </Alert>
        )}

        {mutation.isError && (
          <Alert severity="error">
            {mutation.error instanceof Error
              ? mutation.error.message
              : "Something went wrong. Try again when you're ready."}
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 'auto', pb: 2 }}>
          <VoiceTextToggle mode={mode} onChange={setMode} />
          <CalmButton type="submit" variant="contained" fullWidth disabled={!canSubmit}>
            {COPY.thatsEverything}
          </CalmButton>
        </Box>
      </Box>
    </CenteredScreen>
  )
}
