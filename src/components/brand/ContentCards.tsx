import { Box, Paper, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { brand } from '../../theme/brand'
import { ThreadIllustration } from './ThreadIllustration'

type FocusCardProps = {
  children: ReactNode
}

export function FocusCard({ children }: FocusCardProps) {
  return (
    <Paper
      sx={{
        p: 3.5,
        borderRadius: '20px',
        bgcolor: 'background.paper',
        textAlign: 'center',
        display: 'flex',
        flexDirection: 'column',
        gap: 2.5,
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 1.5 }}>
        <ThreadIllustration height={32} resolve="clear" showDot />
      </Box>
      {children}
    </Paper>
  )
}

type QuoteBlockProps = {
  children: string
}

export function QuoteBlock({ children }: QuoteBlockProps) {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
      <ThreadIllustration height={48} resolve="mid" showDot />
      <Typography
        sx={{
          fontSize: brand.font.body,
          lineHeight: 1.75,
          color: 'text.secondary',
          fontStyle: 'normal',
          fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}
