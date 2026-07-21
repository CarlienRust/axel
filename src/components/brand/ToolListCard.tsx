import ChevronRightIcon from '@mui/icons-material/ChevronRight'
import { Box, Paper, Typography } from '@mui/material'
import type { ReactNode } from 'react'

type ToolListCardProps = {
  title: string
  description: string
  icon: ReactNode
  selected?: boolean
  onClick: () => void
}

export function ToolListCard({ title, description, icon, selected, onClick }: ToolListCardProps) {
  return (
    <Paper
      component="button"
      type="button"
      onClick={onClick}
      sx={{
        display: 'flex',
        alignItems: 'center',
        gap: 2,
        p: 2.5,
        width: '100%',
        textAlign: 'left',
        cursor: 'pointer',
        bgcolor: selected ? 'rgba(79, 111, 98, 0.06)' : 'background.paper',
        border: 1,
        borderColor: selected ? 'primary.main' : 'divider',
        borderRadius: '16px',
        transition: 'border-color 200ms ease, background-color 200ms ease',
        '&:hover': {
          borderColor: 'primary.main',
          bgcolor: 'rgba(79, 111, 98, 0.04)',
        },
      }}
    >
      <Box
        sx={{
          width: 44,
          height: 44,
          borderRadius: '12px',
          bgcolor: 'rgba(79, 111, 98, 0.1)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'primary.dark',
          flexShrink: 0,
        }}
      >
        {icon}
      </Box>
      <Box sx={{ flex: 1, minWidth: 0 }}>
        <Typography variant="body1" fontWeight={600}>
          {title}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mt: 0.25, lineHeight: 1.5 }}>
          {description}
        </Typography>
      </Box>
      <ChevronRightIcon sx={{ color: 'text.secondary', flexShrink: 0 }} />
    </Paper>
  )
}
