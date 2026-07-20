import { Box, Typography } from '@mui/material'
import { PROTOTYPE_DISPLAY_NAME } from '../../constants/user'
import { readStoreSnapshot } from '../../services/storage'
import { COPY } from '../../constants/copy'
import { JournalList } from '../journal/JournalList'
import { ProfileHeader } from './ProfileHeader'
import { ProfileQuoteCard, WeekOverviewCard } from './WeekOverviewCard'
import { buildWeekOverview } from './weekStats'

function greetingPrefix(): string {
  const hour = new Date().getHours()
  if (hour < 12) return COPY.profileGreetingMorning
  if (hour < 17) return COPY.profileGreetingAfternoon
  return COPY.profileGreetingEvening
}

export function ProfilePage() {
  const store = readStoreSnapshot()
  const overview = buildWeekOverview(store)

  return (
    <Box sx={{ maxWidth: 640, mx: 'auto', px: 3, py: 4 }}>
      <ProfileHeader greeting={greetingPrefix()} displayName={PROTOTYPE_DISPLAY_NAME} />
      <WeekOverviewCard overview={overview} />
      <ProfileQuoteCard />

      <Typography variant="h3" component="h2" sx={{ fontSize: '1.125rem', fontWeight: 600, mb: 0.5 }}>
        {COPY.journalTitle}
      </Typography>
      <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
        {COPY.journalSubtitle}
      </Typography>
      <JournalList />
    </Box>
  )
}
