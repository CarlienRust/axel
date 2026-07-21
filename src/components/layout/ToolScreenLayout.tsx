import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { Box, IconButton, Typography } from '@mui/material'
import type { ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { MicroIllustration, type MicroIllustrationId } from '../brand/MicroIllustration'
import { COPY } from '../../constants/copy'
import { layout } from '../../theme/layout'

/** Fixed action area above bottom nav — transparent; buttons carry their own surfaces */
export function BottomActionBar({ children }: { children: ReactNode }) {
  return (
    <Box
      component="footer"
      sx={{
        position: 'fixed',
        bottom: 56,
        left: 0,
        right: 0,
        zIndex: 2,
        pointerEvents: 'none',
      }}
    >
      <Box
        sx={{
          width: '100%',
          maxWidth: layout.maxWidth,
          mx: 'auto',
          px: layout.px,
          py: 2,
          display: 'flex',
          flexDirection: 'column',
          gap: 1.5,
          boxSizing: 'border-box',
          pointerEvents: 'auto',
          '& > .MuiButton-root': {
            width: '100%',
          },
          '& .MuiBox-root': {
            display: 'flex',
            gap: 1.5,
            width: '100%',
            '& .MuiButton-root': {
              flex: 1,
              width: 'auto',
            },
          },
        }}
      >
        {children}
      </Box>
    </Box>
  )
}

type ToolScreenLayoutProps = {
  /** Used for document title and screen readers when illustration is the visible header */
  title: string
  subtitle?: string
  illustration?: MicroIllustrationId
  backTo?: string
  children: ReactNode
  footer?: ReactNode
}

const visuallyHiddenSx = {
  position: 'absolute',
  width: 1,
  height: 1,
  padding: 0,
  margin: -1,
  overflow: 'hidden',
  clip: 'rect(0, 0, 0, 0)',
  whiteSpace: 'nowrap',
  border: 0,
} as const

export function ToolScreenLayout({
  title,
  subtitle,
  illustration,
  backTo = '/tools',
  children,
  footer,
}: ToolScreenLayoutProps) {
  const navigate = useNavigate()

  return (
    <>
      <Box
        sx={{
          maxWidth: layout.maxWidth,
          mx: 'auto',
          px: layout.px,
          pt: layout.pt,
          pb: footer ? layout.pbFooter : layout.pbNav,
          minHeight: 'calc(100vh - 56px)',
          display: 'flex',
          flexDirection: 'column',
          gap: layout.sectionGap,
        }}
      >
        <Box component="header">
          <IconButton
            aria-label={COPY.backToTools}
            onClick={() => navigate(backTo)}
            sx={{ ml: -1, mb: illustration ? 1 : 0, border: 1, borderColor: 'divider', bgcolor: 'background.paper' }}
          >
            <ArrowBackIcon />
          </IconButton>
          {illustration ? (
            <Box sx={{ display: 'flex', justifyContent: 'center', py: 1 }}>
              <MicroIllustration id={illustration} width={180} />
              <Typography component="h1" sx={visuallyHiddenSx}>
                {title}
              </Typography>
            </Box>
          ) : (
            <Box>
              <Typography variant="h2" component="h1" sx={{ fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.3 }}>
                {title}
              </Typography>
              {subtitle && (
                <Typography variant="body2" color="text.secondary" sx={{ mt: 1, lineHeight: 1.6 }}>
                  {subtitle}
                </Typography>
              )}
            </Box>
          )}
        </Box>

        <Box sx={{ display: 'flex', flexDirection: 'column', gap: layout.sectionGap, flex: 1 }}>
          {children}
        </Box>
      </Box>

      {footer && <BottomActionBar>{footer}</BottomActionBar>}
    </>
  )
}
