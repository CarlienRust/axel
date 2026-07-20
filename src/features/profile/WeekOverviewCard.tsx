import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder'
import { Box, Paper, Typography } from '@mui/material'
import { COPY } from '../../constants/copy'
import type { WeekOverview } from './weekStats'
import { getWeekStart, isTodayInWeek } from './weekStats'

type WeekOverviewCardProps = {
  overview: WeekOverview
}

export function WeekOverviewCard({ overview }: WeekOverviewCardProps) {
  const weekStart = getWeekStart()

  return (
    <Paper sx={{ p: 2.5, mb: 3 }}>
      <Typography variant="body1" fontWeight={600} sx={{ mb: 2 }}>
        {COPY.profileThisWeek}
      </Typography>
      <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap', mb: 2.5 }}>
        <Stat label={COPY.profileStatDumps} value={overview.brainDumps} />
        <Stat label={COPY.profileStatReflections} value={overview.reflections} />
        <Stat label={COPY.profileStatTools} value={overview.toolsUsed} />
      </Box>
      <Box sx={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', gap: 0.5, height: 72 }}>
        {overview.days.map((day, i) => {
          const heightPct = (day.count / overview.maxDayCount) * 100
          const isToday = isTodayInWeek(weekStart, i)
          return (
            <Box key={`${day.label}-${i}`} sx={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 0.75 }}>
              <Box
                sx={{
                  width: '100%',
                  maxWidth: 28,
                  height: `${Math.max(heightPct, 8)}%`,
                  minHeight: day.count > 0 ? 12 : 6,
                  borderRadius: '6px',
                  bgcolor: isToday ? 'primary.main' : 'primary.main',
                  opacity: isToday ? 1 : day.count > 0 ? 0.45 : 0.15,
                  transition: 'height 200ms ease',
                }}
              />
              <Typography variant="caption" color={isToday ? 'primary.dark' : 'text.secondary'} fontWeight={isToday ? 600 : 400}>
                {day.label}
              </Typography>
            </Box>
          )
        })}
      </Box>
    </Paper>
  )
}

function Stat({ label, value }: { label: string; value: number }) {
  return (
    <Box>
      <Typography variant="h3" sx={{ fontSize: '1.25rem', fontWeight: 600, lineHeight: 1.2 }}>
        {value}
      </Typography>
      <Typography variant="caption" color="text.secondary">
        {label}
      </Typography>
    </Box>
  )
}

export function ProfileQuoteCard() {
  return (
    <Paper sx={{ p: 2.5, mb: 3, display: 'flex', gap: 1.5, alignItems: 'flex-start' }}>
      <FavoriteBorderIcon sx={{ color: 'primary.main', opacity: 0.6, mt: 0.25, fontSize: 20 }} />
      <Typography variant="body2" color="text.secondary" sx={{ lineHeight: 1.65, fontStyle: 'italic' }}>
        {COPY.profileQuote}
      </Typography>
    </Paper>
  )
}
