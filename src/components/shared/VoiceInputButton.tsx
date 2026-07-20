import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import { CircularProgress, IconButton, Tooltip } from '@mui/material'
import { COPY } from '../../constants/copy'

type VoiceInputButtonProps = {
  supported: boolean
  isListening: boolean
  onToggle: () => void
}

export function VoiceInputButton({ supported, isListening, onToggle }: VoiceInputButtonProps) {
  if (!supported) return null

  const label = isListening ? COPY.ariaVoiceStop : COPY.ariaVoiceRecord

  return (
    <Tooltip title={isListening ? COPY.ariaVoiceListening : COPY.ariaVoiceRecord}>
      <IconButton
        onClick={onToggle}
        aria-label={label}
        color={isListening ? 'primary' : 'default'}
        sx={{
          bgcolor: isListening ? 'rgba(79, 111, 98, 0.12)' : 'background.paper',
          border: 1,
          borderColor: 'divider',
          color: isListening ? 'primary.main' : 'text.secondary',
          '&:hover': { bgcolor: 'rgba(79, 111, 98, 0.08)' },
        }}
      >
        {isListening ? <MicOffIcon /> : <MicIcon />}
      </IconButton>
    </Tooltip>
  )
}

export function VoiceListeningIndicator({ isListening }: { isListening: boolean }) {
  if (!isListening) return null
  return <CircularProgress size={20} aria-label={COPY.ariaVoiceListening} />
}
