import { Box, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type PageHeaderProps = {
  title: string
  subtitle?: string
}

export function PageHeader({ title, subtitle }: PageHeaderProps) {
  return (
    <>
      <Typography variant="h2" component="h1" sx={{ fontSize: '1.5rem', fontWeight: 600, mb: subtitle ? 1 : 2 }}>
        {title}
      </Typography>
      {subtitle && (
        <Typography variant="body2" color="text.secondary" sx={{ mb: 3, lineHeight: 1.6 }}>
          {subtitle}
        </Typography>
      )}
    </>
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
        maxWidth: 480,
        mx: 'auto',
        px: 3,
        pt: 3,
        pb: 3,
        minHeight: '100%',
      }}
    >
      {children}
    </Box>
  )
}
