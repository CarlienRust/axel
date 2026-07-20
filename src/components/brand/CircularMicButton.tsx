import MicIcon from '@mui/icons-material/Mic'
import MicOffIcon from '@mui/icons-material/MicOff'
import { IconButton } from '@mui/material'
import { COPY } from '../../constants/copy'

type CircularMicButtonProps = {
  isListening: boolean
  onClick: () => void
  disabled?: boolean
}

export function CircularMicButton({ isListening, onClick, disabled }: CircularMicButtonProps) {
  return (
    <IconButton
      onClick={onClick}
      disabled={disabled}
      aria-label={isListening ? COPY.ariaVoiceStop : COPY.ariaVoiceRecord}
      sx={{
        width: 88,
        height: 88,
        bgcolor: 'primary.main',
        color: 'primary.contrastText',
        '&:hover': { bgcolor: 'primary.dark' },
        '&.Mui-disabled': { bgcolor: 'action.disabledBackground', color: 'text.disabled' },
      }}
    >
      {isListening ? <MicOffIcon sx={{ fontSize: 36 }} /> : <MicIcon sx={{ fontSize: 36 }} />}
    </IconButton>
  )
}
