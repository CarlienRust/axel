import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, IconButton, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { COPY } from '../../constants/copy'

/** Fixed action area above bottom nav — matches mockup tool screens */
export function BottomActionBar({ children }: { children: ReactNode }) {
  return (
    <Box
      sx={{
        position: 'fixed',
        bottom: 56,
        left: 0,
        right: 0,
        zIndex: 2,
        px: 3,
        py: 2,
        bgcolor: 'background.paper',
        borderTop: 1,
        borderColor: 'divider',
        display: 'flex',
        flexDirection: 'column',
        gap: 1,
      }}
    >
      {children}
    </Box>
  )
}

type ToolScreenLayoutProps = {
  title: string
  subtitle?: string
  backTo?: string
  children: ReactNode
  footer?: ReactNode
}

export function ToolScreenLayout({
  title,
  subtitle,
  backTo = '/tools',
  children,
  footer,
}: ToolScreenLayoutProps) {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        maxWidth: 640,
        mx: 'auto',
        px: 3,
        pt: 2,
        pb: footer ? 18 : 4,
        minHeight: 'calc(100vh - 56px)',
      }}
    >
      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1, mb: 2 }}>
        <IconButton
          aria-label={COPY.backToTools}
          onClick={() => navigate(backTo)}
          sx={{ mt: 0.25, ml: -1, border: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
        >
          <ArrowBackIcon />
        </IconButton>
        <Box sx={{ flex: 1, minWidth: 0 }}>
          <Typography variant="h2" component="h1" sx={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3 }}>
            {title}
          </Typography>
          {subtitle && (
            <Typography variant="body2" color="text.secondary" sx={{ mt: 0.5, lineHeight: 1.6 }}>
              {subtitle}
            </Typography>
          )}
        </Box>
      </Box>

      {children}

      {footer && <BottomActionBar>{footer}</BottomActionBar>}
    </Box>
  )
}
