import { useLocation } from 'react-router-dom'
import { Box } from '@mui/material'
import { useSyncExternalStore } from 'react'
import {
  getBackgroundVariant,
  setBackgroundVariant,
  type BackgroundVariant,
} from '../../theme/backgroundPreference'
import { backgroundColor, BackgroundSplash } from './BackgroundSplash'

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

/** Fixed app backdrop — solid Warm Linen or Deep Forest */
export function AppBackground() {
  const location = useLocation()
  const variant = useSyncExternalStore(subscribe, getSnapshot, () => 'beige' as BackgroundVariant)

  if (location.pathname === '/') {
    return null
  }

  return (
    <Box
      aria-hidden
      sx={{
        position: 'fixed',
        inset: 0,
        zIndex: 0,
        pointerEvents: 'none',
        bgcolor: backgroundColor(variant),
      }}
    />
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
      }}
    >
      <BackgroundSplash variant={variant} />
    </Box>
  )
}
