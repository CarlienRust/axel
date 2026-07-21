import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import { layout } from '../../theme/layout'

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
        px: layout.px,
        pt: align === 'center' ? layout.sectionGap : layout.pt,
        pb: align === 'center' ? layout.sectionGap : layout.pbNav,
        position: 'relative',
      }}
    >
      <Box sx={{ width: '100%', maxWidth: layout.maxWidth }}>{children}</Box>
    </Box>
  )
}
