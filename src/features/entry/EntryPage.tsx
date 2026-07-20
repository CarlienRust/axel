import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { AxelLogo } from '../../components/brand/AxelLogo'
import { LandscapeIllustration } from '../../components/brand/LandscapeIllustration'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'

export function EntryPage() {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', minHeight: 'calc(100vh - 64px)' }}>
      <LandscapeIllustration height={240} />
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          justifyContent: 'center',
          px: 3,
          py: 4,
          gap: 3,
        }}
      >
        <AxelLogo showTagline size="large" />
        <Typography
          align="center"
          sx={{ color: 'text.secondary', fontSize: '1.0625rem', lineHeight: 1.6, maxWidth: 320 }}
        >
          {COPY.entryQuestion}
        </Typography>
        <CalmButton
          variant="contained"
          onClick={() => navigate('/dump')}
          fullWidth
          sx={{ maxWidth: 320, mt: 1 }}
        >
          {COPY.getStarted}
        </CalmButton>
      </Box>
    </Box>
  )
}
