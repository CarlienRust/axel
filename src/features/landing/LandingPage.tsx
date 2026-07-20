import { Typography } from '@mui/material'
import { ScreenShell } from '../../components/shared/ScreenShell'

export function LandingPage() {
  return (
    <ScreenShell
      title="Landing tools"
      subtitle="Short, practical exercises for when the noise gets too loud."
    >
      <Typography variant="body1" color="text.secondary">
        Grounding exercises ship on Day 4.
      </Typography>
    </ScreenShell>
  )
}
