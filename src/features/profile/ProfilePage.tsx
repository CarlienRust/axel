import { Box, Typography } from '@mui/material'
import { PROTOTYPE_DISPLAY_NAME } from '../../constants/user'
import { COPY } from '../../constants/copy'
import { CrisisBanner } from '../../components/shared/CrisisBanner'
import { JournalList } from '../journal/JournalList'
import { ProfileHeader } from './ProfileHeader'
import { ProfileQuoteCard } from './WeekOverviewCard'

function greetingPrefix(): string {
  const hour = new Date().getHours()
  if (hour < 12) return COPY.profileGreetingMorning
  if (hour < 17) return COPY.profileGreetingAfternoon
  return COPY.profileGreetingEvening
}

export function ProfilePage() {
  return (
    <Box sx={{ maxWidth: 640, mx: 'auto', px: 3, py: 4, display: 'flex', flexDirection: 'column', gap: 3 }}>
      <ProfileHeader greeting={greetingPrefix()} displayName={PROTOTYPE_DISPLAY_NAME} />
      <ProfileQuoteCard />

      <Box>
        <Typography variant="h3" component="h2" sx={{ fontSize: '1.125rem', fontWeight: 600, mb: 0.5 }}>
          {COPY.journalTitle}
        </Typography>
        <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
          {COPY.journalSubtitle}
        </Typography>
        <JournalList />
      </Box>

      <CrisisBanner />
    </Box>
  )
}
