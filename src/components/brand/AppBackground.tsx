import { Box } from '@mui/material'
import { useSyncExternalStore } from 'react'
import {
  getBackgroundVariant,
  setBackgroundVariant,
  type BackgroundVariant,
} from '../../theme/backgroundPreference'
import { BackgroundSplash } from './BackgroundSplash'

function subscribe(onStoreChange: () => void) {
  window.addEventListener('axel-background-change', onStoreChange)
  return () => window.removeEventListener('axel-background-change', onStoreChange)
}

function getSnapshot() {
  return getBackgroundVariant()
}

export function notifyBackgroundChange() {
  window.dispatchEvent(new Event('axel-background-change'))
}

export function updateBackgroundVariant(variant: BackgroundVariant) {
  setBackgroundVariant(variant)
  notifyBackgroundChange()
}

/** Fixed app backdrop — moodboard variants from docs/background_moodboard.png */
export function AppBackground() {
  const variant = useSyncExternalStore(subscribe, getSnapshot, () => 'abstract-landscape' as BackgroundVariant)

  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        overflow: 'hidden',
      }}
    >
      <BackgroundSplash variant={variant} idPrefix="app" />
      <Box
        sx={{
          position: 'absolute',
          inset: 0,
          background: 'linear-gradient(180deg, rgba(246,243,238,0.15) 0%, rgba(246,243,238,0.72) 45%, rgba(246,243,238,0.95) 100%)',
        }}
      />
    </Box>
  )
}

export function BackgroundPreview({ variant, selected, onSelect }: {
  variant: BackgroundVariant
  selected: boolean
  onSelect: () => void
}) {
  return (
    <Box
      component="button"
      type="button"
      onClick={onSelect}
      aria-pressed={selected}
      sx={{
        width: '100%',
        aspectRatio: '16/10',
        borderRadius: '12px',
        overflow: 'hidden',
        border: 2,
        borderColor: selected ? 'primary.main' : 'divider',
        cursor: 'pointer',
        p: 0,
        bgcolor: 'background.paper',
      }}
    >
      <BackgroundSplash variant={variant} idPrefix={`preview-${variant}`} />
    </Box>
  )
}
