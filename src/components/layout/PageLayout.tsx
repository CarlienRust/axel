import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { MicroIllustration, type MicroIllustrationId } from '../brand/MicroIllustration'
import { layout } from '../../theme/layout'

type PageHeaderProps = {
  title: string
  subtitle?: string
  illustration?: MicroIllustrationId
}

export function PageHeader({ title, subtitle, illustration }: PageHeaderProps) {
  return (
    <Box component="header" sx={{ mb: layout.headerMb }}>
      <Typography variant="h2" component="h1" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: illustration || subtitle ? 1 : 0 }}>
        {title}
      </Typography>
      {illustration && (
        <Box sx={{ mb: subtitle ? 1.5 : 0 }}>
          <MicroIllustration id={illustration} />
        </Box>
      )}
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.6 }}>
          {subtitle}
        </Typography>
      )}
    </Box>
  )
}

type PageLayoutProps = {
  children: ReactNode
}

/** Standard screen container — mockup-style padding on Warm Linen */
export function PageLayout({ children }: PageLayoutProps) {
  return (
    <Box
      sx={{
        maxWidth: layout.maxWidth,
        mx: 'auto',
        px: layout.px,
        pt: layout.pt,
        pb: layout.pbNav,
        minHeight: '100%',
      }}
    >
      {children}
    </Box>
  )
}
