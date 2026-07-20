import { Box, ToggleButton, ToggleButtonGroup } from '@mui/material'
import MicNoneOutlinedIcon from '@mui/icons-material/MicNoneOutlined'
import EditOutlinedIcon from '@mui/icons-material/EditOutlined'

export type InputMode = 'voice' | 'text'

type VoiceTextToggleProps = {
  mode: InputMode
  onChange: (mode: InputMode) => void
}

export function VoiceTextToggle({ mode, onChange }: VoiceTextToggleProps) {
  return (
    <ToggleButtonGroup
      value={mode}
      exclusive
      onChange={(_, v: InputMode | null) => v && onChange(v)}
      sx={{
        alignSelf: 'center',
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
        borderRadius: '999px',
        p: 0.5,
        '& .MuiToggleButton-root': {
          border: 0,
          borderRadius: '999px !important',
          px: 2.5,
          py: 1,
          textTransform: 'none',
          fontWeight: 600,
          fontSize: '0.875rem',
          gap: 0.75,
          color: 'text.secondary',
          '&.Mui-selected': {
            bgcolor: 'primary.dark',
            color: 'primary.contrastText',
            '&:hover': { bgcolor: 'primary.dark' },
          },
        },
      }}
    >
      <ToggleButton value="voice">
        <MicNoneOutlinedIcon sx={{ fontSize: 18 }} />
        Voice
      </ToggleButton>
      <ToggleButton value="text">
        <EditOutlinedIcon sx={{ fontSize: 18 }} />
        Text
      </ToggleButton>
    </ToggleButtonGroup>
  )
}

export function WaveformDecoration({ active }: { active?: boolean }) {
  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 0.75,
        height: 80,
        opacity: active ? 1 : 0.5,
        transition: 'opacity 200ms ease',
      }}
      aria-hidden
    >
      {[14, 28, 42, 24, 36, 20, 32, 18, 26].map((h, i) => (
        <Box
          key={i}
          sx={{
            width: 4,
            height: active ? h : h * 0.4,
            borderRadius: 999,
            bgcolor: 'primary.main',
            opacity: 0.35 + (i % 3) * 0.15,
            transition: 'height 300ms ease',
          }}
        />
      ))}
    </Box>
  )
}
