import { Box, Link, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type CenteredScreenProps = {
  children: ReactNode
  showCrisisLink?: boolean
  align?: 'center' | 'top'
}

/** Minimal layout for core loop screens */
export function CenteredScreen({ children, showCrisisLink = false, align = 'center' }: CenteredScreenProps) {
  return (
    <Box
      sx={{
        minHeight: align === 'center' ? '100vh' : 'auto',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: align === 'center' ? 'center' : 'flex-start',
        px: 3,
        py: align === 'center' ? 4 : 3,
        position: 'relative',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: 480 }}>{children}</Box>
      {showCrisisLink && <CrisisLink />}
    </Box>
  )
}

function CrisisLink() {
  return (
    <Typography
      variant="caption"
      color="text.secondary"
      sx={{ position: 'absolute', bottom: 16, opacity: 0.6 }}
    >
      Crisis help:{' '}
      <Link href="tel:0800212223" underline="hover" color="primary">
        SADAG 0800 21 22 23
      </Link>
    </Typography>
  )
}
