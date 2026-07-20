import { Box, CircularProgress, Typography } from '@mui/material'

type LoadingStateProps = {
  message?: string
}

export function LoadingState({ message = 'Straightening this out…' }: LoadingStateProps) {
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2,
        py: 6,
      }}
    >
      <CircularProgress size={32} color="primary" />
      <Typography variant="body1" color="text.secondary">
        {message}
      </Typography>
    </Box>
  )
}
