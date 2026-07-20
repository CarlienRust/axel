import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AxelLogo } from '../../components/brand/AxelLogo'
import { ThreadIllustration } from '../../components/brand/ThreadIllustration'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'
import { brand } from '../../theme/brand'

export function EntryPage() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        position: 'fixed',
        inset: 0,
        bottom: 56,
        display: 'flex',
        flexDirection: 'column',
        bgcolor: brand.primaryDark,
        zIndex: 1,
        '@media (prefers-reduced-motion: no-preference)': {
          animation: 'axelEntryFade 400ms ease forwards',
        },
        '@keyframes axelEntryFade': {
          from: { opacity: 0 },
          to: { opacity: 1 },
        },
      }}
    >
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          pt: 6,
        }}
      >
        <AxelLogo showTagline size="large" tone="light" />
      </Box>

      <Box sx={{ px: 3, pb: 2, width: '100%', maxWidth: 400, mx: 'auto' }}>
        <ThreadIllustration height={72} resolveProgress={0.55} tone="dark" showDot />
      </Box>

      <Box sx={{ px: 3, pb: 4, width: '100%', maxWidth: 400, mx: 'auto' }}>
        <CalmButton
          variant="contained"
          onClick={() => navigate('/dump')}
          fullWidth
          sx={{
            bgcolor: brand.surface,
            color: brand.primaryDark,
            '&:hover': { bgcolor: brand.background },
          }}
        >
          {COPY.getStarted}
        </CalmButton>
      </Box>
    </Box>
  )
}
