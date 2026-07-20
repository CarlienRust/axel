import { Box } from '@mui/material'
import type { ReactNode } from 'react'

type CenteredScreenProps = {
  children: ReactNode
  align?: 'center' | 'top'
}

/** Minimal layout for core loop screens */
export function CenteredScreen({ children, align = 'center' }: CenteredScreenProps) {
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
    </Box>
  )
}
