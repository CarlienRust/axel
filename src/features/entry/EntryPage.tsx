import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AxelLogo } from '../../components/brand/AxelLogo'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'

export function EntryPage() {
  const navigate = useNavigate()

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        minHeight: 'calc(100vh - 64px)',
        justifyContent: 'center',
        px: 3,
        py: 6,
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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          maxWidth: 360,
          mx: 'auto',
        }}
      >
        <AxelLogo showTagline size="large" />
        <Typography
          align="center"
          sx={{ color: 'text.secondary', fontSize: '1.0625rem', lineHeight: 1.6 }}
        >
          {COPY.entryQuestion}
        </Typography>
        <CalmButton
          variant="contained"
          onClick={() => navigate('/dump')}
          fullWidth
          sx={{ mt: 1 }}
        >
          {COPY.getStarted}
        </CalmButton>
        <Typography variant="caption" color="text.secondary" sx={{ opacity: 0.75 }}>
          {COPY.entryTrustLine}
        </Typography>
      </Box>
    </Box>
  )
}
