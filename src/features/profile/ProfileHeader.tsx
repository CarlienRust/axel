import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined'
import {
  Avatar,
  Box,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import {
  BACKGROUND_VARIANTS,
  getBackgroundVariant,
} from '../../theme/backgroundPreference'
import { BackgroundPreview, updateBackgroundVariant } from '../../components/brand/AppBackground'
import { Disclaimer } from '../../components/shared/Disclaimer'
import { COPY } from '../../constants/copy'

type ProfileHeaderProps = {
  greeting: string
  displayName: string
}

export function ProfileHeader({ greeting, displayName }: ProfileHeaderProps) {
  const [settingsOpen, setSettingsOpen] = useState(false)
  const [background, setBackground] = useState(getBackgroundVariant)

  function selectBackground(id: typeof background) {
    setBackground(id)
    updateBackgroundVariant(id)
  }

  return (
    <>
      <Box sx={{ display: 'flex', alignItems: 'center', gap: 2, mb: 3 }}>
        <Avatar
          sx={{
            width: 52,
            height: 52,
            bgcolor: 'primary.main',
            fontSize: '1.25rem',
            fontWeight: 600,
          }}
        >
          {displayName.charAt(0).toUpperCase()}
        </Avatar>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="body2" color="text.secondary">
            {greeting}
          </Typography>
          <Typography variant="h2" sx={{ fontSize: '1.375rem', fontWeight: 600, lineHeight: 1.3 }}>
            {displayName}
          </Typography>
        </Box>
        <IconButton
          aria-label={COPY.settingsTitle}
          onClick={() => setSettingsOpen(true)}
          sx={{ border: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
        >
          <SettingsOutlinedIcon />
        </IconButton>
      </Box>

      <Dialog open={settingsOpen} onClose={() => setSettingsOpen(false)} fullWidth maxWidth="xs">
        <DialogTitle>{COPY.settingsTitle}</DialogTitle>
        <DialogContent sx={{ display: 'flex', flexDirection: 'column', gap: 2, pb: 3 }}>
          <Typography variant="body2" color="text.secondary">
            {COPY.settingsBackgroundLabel}
          </Typography>
          <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 1.5 }}>
            {BACKGROUND_VARIANTS.map((v) => (
              <Box key={v.id}>
                <BackgroundPreview
                  variant={v.id}
                  selected={background === v.id}
                  onSelect={() => selectBackground(v.id)}
                />
                <Typography variant="caption" color="text.secondary" sx={{ mt: 0.5, display: 'block' }}>
                  {v.label}
                </Typography>
              </Box>
            ))}
          </Box>
          <Disclaimer />
        </DialogContent>
      </Dialog>
    </>
  )
}
