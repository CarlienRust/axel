import { Box } from '@mui/material'
import type { ReactNode } from 'react'
import type { MicroIllustrationId } from '../brand/MicroIllustration'
import { PageHeader } from '../layout/PageLayout'
import { layout } from '../../theme/layout'

type ScreenShellProps = {
  children: ReactNode
  title?: string
  subtitle?: string
  illustration?: MicroIllustrationId
}

export function ScreenShell({ children, title, subtitle, illustration }: ScreenShellProps) {
  return (
    <Box
      sx={{
        maxWidth: layout.maxWidth,
        mx: 'auto',
        px: layout.px,
        pt: layout.pt,
        pb: layout.pbNav,
        display: 'flex',
        flexDirection: 'column',
        gap: layout.sectionGap,
      }}
    >
      {title && <PageHeader title={title} subtitle={subtitle} illustration={illustration} />}

      {children}
    </Box>
  )
}
