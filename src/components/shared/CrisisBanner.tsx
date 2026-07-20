import { Box, Link, Typography } from '@mui/material'

export function CrisisBanner() {
  return (
    <Box
      sx={{
        px: 2,
        py: 1.5,
        borderRadius: 2,
        bgcolor: 'background.paper',
        border: 1,
        borderColor: 'divider',
      }}
    >
      <Typography variant="body2" color="text.secondary">
        In crisis? Call SADAG:{' '}
        <Link href="tel:0800212223" underline="hover" color="primary">
          0800 21 22 23
        </Link>
      </Typography>
    </Box>
  )
}
