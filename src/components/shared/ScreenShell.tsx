import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { PageHeader } from '../layout/PageLayout'

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
        gap: 4,
      }}
    >
      {title && <PageHeader title={title} subtitle={subtitle} />}

      {children}
    </Box>
  )
}
