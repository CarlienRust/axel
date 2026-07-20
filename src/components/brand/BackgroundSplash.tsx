import { Box } from '@mui/material'
import type { BackgroundVariant } from '../../theme/backgroundPreference'
import { brand } from '../../theme/brand'

type BackgroundSplashProps = {
  variant: BackgroundVariant
}

export function backgroundColor(variant: BackgroundVariant): string {
  return variant === 'beige' ? brand.background : brand.primaryDark
}

export function BackgroundSplash({ variant }: BackgroundSplashProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: '100%',
        bgcolor: backgroundColor(variant),
      }}
    />
  )
}
