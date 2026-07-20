import { Typography } from '@mui/material'
import { Disclaimer } from '../../components/shared/Disclaimer'
import { ScreenShell } from '../../components/shared/ScreenShell'

export function PrepPage() {
  return (
    <ScreenShell
      title="Prepare for your appointment"
      subtitle="Build a picture of your experience in your own words, at your pace."
    >
      <Disclaimer />
      <Typography variant="body1" color="text.secondary" sx={{ mt: 2 }}>
        The preparation tool ships on Day 5.
      </Typography>
    </ScreenShell>
  )
}
