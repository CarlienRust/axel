import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import { Box, IconButton, Typography } from '@mui/material'
import { useCallback, type ChangeEvent } from 'react'
import { COPY } from '../../constants/copy'
import { useVoiceInput } from '../../hooks/useVoiceInput'
import { CalmTextArea } from './CalmTextArea'
import type { TextFieldProps } from '@mui/material/TextField'

type VoiceTextAreaProps = Omit<TextFieldProps, 'value' | 'onChange'> & {
  value: string
  onChange: (event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void
}

export function VoiceTextArea({ value, onChange, slotProps, sx, ...props }: VoiceTextAreaProps) {
  const appendVoice = useCallback(
    (text: string) => {
      const next = value.trim() ? `${value.trimEnd()} ${text}` : text
      onChange({ target: { value: next } } as ChangeEvent<HTMLTextAreaElement>)
    },
    [value, onChange],
  )

  const { supported, isListening, interimText, toggle } = useVoiceInput(appendVoice)

  const displayValue = interimText
    ? `${value}${value ? ' ' : ''}${interimText}`
    : value

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.75 }}>
      <Box sx={{ position: 'relative' }}>
        <CalmTextArea
          {...props}
          value={displayValue}
          onChange={onChange}
          slotProps={{
            ...slotProps,
            htmlInput: {
              readOnly: isListening,
              ...slotProps?.htmlInput,
            },
          }}
          sx={{
            ...(supported
              ? {
                  '& .MuiInputBase-root': {
                    pr: 6,
                  },
                }
              : undefined),
            ...sx,
          }}
        />
        {supported && (
          <IconButton
            onClick={toggle}
            aria-label={isListening ? COPY.ariaVoiceStop : COPY.ariaVoiceRecord}
            sx={{
              position: 'absolute',
              right: 8,
              bottom: 8,
              bgcolor: isListening ? 'primary.dark' : 'background.paper',
              color: isListening ? 'primary.contrastText' : 'primary.main',
              border: 1,
              borderColor: 'divider',
              '&:hover': {
                bgcolor: isListening ? 'primary.dark' : 'action.hover',
              },
            }}
          >
            {isListening ? <MicOffIcon fontSize="small" /> : <MicIcon fontSize="small" />}
          </IconButton>
        )}
      </Box>
      {!supported && (
        <Typography variant="caption" color="text.secondary">
          {COPY.voiceUnsupported}
        </Typography>
      )}
    </Box>
  )
}
