import { Paper, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { brand } from '../../theme/brand'

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
      }}
    >
      {children}
    </Paper>
  )
}

type QuoteBlockProps = {
  children: string
}

export function QuoteBlock({ children }: QuoteBlockProps) {
  return (
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
  )
}
