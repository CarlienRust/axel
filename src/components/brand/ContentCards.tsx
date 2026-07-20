import { Box, Paper, Typography } from '@mui/material'
import type { ReactNode } from 'react'

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
    <Box sx={{ position: 'relative', px: 1 }}>
      <Typography
        aria-hidden
        sx={{
          fontFamily: '"Lora", Georgia, serif',
          fontSize: '4rem',
          lineHeight: 1,
          color: 'primary.main',
          opacity: 0.25,
          mb: -2,
        }}
      >
        "
      </Typography>
      <Typography
        sx={{
          fontSize: '1.0625rem',
          lineHeight: 1.75,
          color: 'text.secondary',
          fontStyle: 'normal',
        }}
      >
        {children}
      </Typography>
    </Box>
  )
}
