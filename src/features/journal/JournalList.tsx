import { Box, Typography } from '@mui/material'
import { COPY } from '../../constants/copy'
import { readStoreSnapshot } from '../../services/storage'
import { buildJournalEntries } from './journalUtils'
import { JournalEntryCard } from './JournalEntryCard'

type JournalListProps = {
  limit?: number
  emptyMessage?: string
}

export function JournalList({ limit, emptyMessage = COPY.journalEmpty }: JournalListProps) {
  const store = readStoreSnapshot()
  const entries = buildJournalEntries(store.dumps, store.responses)
  const visible = limit ? entries.slice(0, limit) : entries

  if (visible.length === 0) {
    return (
      <Typography variant="body2" color="text.secondary">
        {emptyMessage}
      </Typography>
    )
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
      {visible.map((entry) => (
        <JournalEntryCard key={entry.dumpId} entry={entry} />
      ))}
    </Box>
  )
}
