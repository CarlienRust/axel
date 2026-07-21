import { Paper, Typography } from '@mui/material'
import type { JournalEntry } from './journalUtils'

type JournalEntryCardProps = {
  entry: JournalEntry
}

export function JournalEntryCard({ entry }: JournalEntryCardProps) {
  return (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1 }}>
      <Typography variant="caption" color="text.secondary">
        {entry.dateLabel}
      </Typography>
      <Typography variant="body2" color="text.secondary" noWrap>
        {entry.dumpPreview}
      </Typography>
      <Typography variant="body1" sx={{ fontWeight: 600 }}>
        {entry.oneThing}
      </Typography>
    </Paper>
  )
}
