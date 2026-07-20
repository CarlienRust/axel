import { Typography } from '@mui/material'
import { ScreenShell } from '../../components/shared/ScreenShell'

export function DumpPage() {
  return (
    <ScreenShell
      title="What's loud right now?"
      subtitle="Pour it all here. Everything that's in your head. Axel will listen and hand back one thing."
    >
      <Typography variant="body1" color="text.secondary">
        The noise dump screen ships on Day 3.
      </Typography>
    </ScreenShell>
  )
}
