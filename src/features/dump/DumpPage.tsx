import { Alert, Box, Paper, Typography } from '@mui/material'
import { useMutation } from '@tanstack/react-query'
import { useCallback, useEffect, useState, type FormEvent } from 'react'
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

  const { supported, isListening, interimText, toggle } = useVoiceInput(appendVoice)

  useEffect(() => {
    if (!supported && mode === 'voice') setMode('text')
  }, [supported, mode])

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

  const displayContent = interimText
    ? `${content}${content ? ' ' : ''}${interimText}`
    : content

  const textLen = displayContent.trim().length
  const baseProgress = Math.min(textLen / 120, 0.85)
  const activeBoost = isListening ? 0.1 : 0
  const threadProgress = Math.min(baseProgress + activeBoost, 1)

  const canSubmit = content.trim().length > 0 && !mutation.isPending

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    if (canSubmit) mutation.mutate(content.trim())
  }

  if (mutation.isPending) {
    return (
      <CenteredScreen>
        <LoadingState />
      </CenteredScreen>
    )
  }

  return (
    <CenteredScreen align="top">
      <PageHeader title={COPY.noiseDumpTitle} subtitle={COPY.noiseDumpHint} />
      <Box
        component="form"
        onSubmit={handleSubmit}
        sx={{ display: 'flex', flexDirection: 'column', gap: 3, minHeight: 'calc(100vh - 200px)' }}
      >
        {mode === 'voice' && supported ? (
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
            <WaveformDecoration active={isListening} progress={threadProgress} />
            <CircularMicButton isListening={isListening} onClick={toggle} />
            {(content.trim().length > 0 || interimText) && (
              <Paper sx={{ p: 2, width: '100%', bgcolor: 'background.paper' }}>
                <CalmTextArea
                  value={displayContent}
                  onChange={(e) => setContent(e.target.value)}
                  minRows={3}
                  slotProps={{
                    htmlInput: { 'aria-label': COPY.noiseDumpTitle, readOnly: isListening },
                  }}
                />
              </Paper>
            )}
          </Box>
        ) : (
          <Paper sx={{ p: 0.5, bgcolor: 'background.paper', flex: 1 }}>
            <CalmTextArea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              minRows={10}
              placeholder={COPY.brainDumpPlaceholder}
              slotProps={{
                htmlInput: { 'aria-label': COPY.noiseDumpTitle },
              }}
              sx={{
                '& .MuiOutlinedInput-root fieldset': { border: 'none' },
                '& .MuiInputBase-root': { minHeight: 200 },
              }}
            />
          </Paper>
        )}

        {mutation.isError && (
          <Alert severity="error">
            {mutation.error instanceof Error
              ? mutation.error.message
              : "Something went wrong. Try again when you're ready."}
          </Alert>
        )}

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, mt: 'auto', pb: 2 }}>
          {supported && <VoiceTextToggle mode={mode} onChange={setMode} />}
          <CalmButton type="submit" variant="contained" fullWidth disabled={!canSubmit}>
            {COPY.thatsEverything}
          </CalmButton>
          <Typography variant="caption" color="text.secondary" align="center" sx={{ opacity: 0.75 }}>
            {COPY.brainDumpFooter}
          </Typography>
        </Box>
      </Box>
    </CenteredScreen>
  )
}
