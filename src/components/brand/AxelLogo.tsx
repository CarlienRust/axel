import { Typography, Box } from '@mui/material'
import { COPY } from '../../constants/copy'
import { brand } from '../../theme/brand'

type AxelLogoProps = {
  showTagline?: boolean
  size?: 'large' | 'medium'
  /** Light text for dark splash backgrounds */
  tone?: 'dark' | 'light'
}

export function AxelLogo({ showTagline = false, size = 'medium', tone = 'dark' }: AxelLogoProps) {
  const fontSize = size === 'large' ? '2.75rem' : '2rem'
  const logoColor = tone === 'light' ? brand.surface : brand.primaryDark
  const taglineColor = tone === 'light' ? 'rgba(255,255,255,0.82)' : 'text.secondary'

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        component="p"
        sx={{
          fontFamily: '"Lora", Georgia, serif',
          fontSize,
          fontWeight: 500,
          color: logoColor,
          letterSpacing: '-0.02em',
          lineHeight: 1.2,
          m: 0,
        }}
      >
        Axel.
      </Typography>
      {showTagline && (
        <Typography
          variant="body2"
          sx={{ mt: 1.5, color: taglineColor, maxWidth: 280, mx: 'auto', lineHeight: 1.6 }}
        >
          {COPY.tagline}
        </Typography>
      )}
    </Box>
  )
}
