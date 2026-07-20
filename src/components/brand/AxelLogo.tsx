import { Typography, Box } from '@mui/material'
import { COPY } from '../../constants/copy'

type AxelLogoProps = {
  showTagline?: boolean
  size?: 'large' | 'medium'
}

export function AxelLogo({ showTagline = false, size = 'medium' }: AxelLogoProps) {
  const fontSize = size === 'large' ? '2.75rem' : '2rem'

  return (
    <Box sx={{ textAlign: 'center' }}>
      <Typography
        component="p"
        sx={{
          fontFamily: '"Lora", Georgia, serif',
          fontSize,
          fontWeight: 500,
          color: 'primary.dark',
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
          sx={{ mt: 1.5, color: 'text.secondary', maxWidth: 280, mx: 'auto', lineHeight: 1.6 }}
        >
          {COPY.tagline}
        </Typography>
      )}
    </Box>
  )
}
