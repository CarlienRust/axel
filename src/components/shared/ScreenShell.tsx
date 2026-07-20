import { Box, Link, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type ScreenShellProps = {
  children: ReactNode
  title?: string
  subtitle?: string
}

export function ScreenShell({ children, title, subtitle }: ScreenShellProps) {
  return (
    <Box
      sx={{
        maxWidth: 640,
        mx: 'auto',
        px: 3,
        py: 4,
        display: 'flex',
        flexDirection: 'column',
        gap: 3,
      }}
    >
      <CrisisBanner />

      {(title || subtitle) && (
        <Box>
          {title && (
            <Typography variant="h2" component="h1" gutterBottom>
              {title}
            </Typography>
          )}
          {subtitle && (
            <Typography variant="body1" color="text.secondary">
              {subtitle}
            </Typography>
          )}
        </Box>
      )}

      {children}
    </Box>
  )
}

export function CrisisBanner() {
  return (
    <Box
      sx={{
        px: 2,
        py: 1.5,
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        In crisis? Call SADAG:{' '}
        <Link href="tel:0800212223" underline="hover" color="primary.light">
          0800 21 22 23
        </Link>
      </Typography>
    </Box>
  )
}
