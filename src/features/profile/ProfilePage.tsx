import { Box, Typography } from '@mui/material'
import { ScreenShell } from '../../components/shared/ScreenShell'
import { COPY } from '../../constants/copy'
import { JournalList } from '../journal/JournalList'

function greeting(): string {
  const hour = new Date().getHours()
  if (hour < 12) return COPY.profileGreetingMorning
  if (hour < 17) return COPY.profileGreetingAfternoon
  return COPY.profileGreetingEvening
}

export function ProfilePage() {
  return (
    <ScreenShell title={COPY.profileTitle} subtitle={greeting()}>
      <Box sx={{ mb: 1 }}>
        <Typography variant="h3" component="h2" sx={{ fontSize: '1.125rem', fontWeight: 600, mb: 0.5 }}>
          {COPY.journalTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {COPY.journalSubtitle}
        </Typography>
        <JournalList />
      </Box>
    </ScreenShell>
  )
}
