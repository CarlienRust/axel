import { Box, Paper, Typography } from '@mui/material'
import { LandscapeThumb } from '../../components/brand/LandscapeIllustration'
import type { JournalEntry } from './journalUtils'

type JournalEntryCardProps = {
  entry: JournalEntry
}

export function JournalEntryCard({ entry }: JournalEntryCardProps) {
  return (
    <Paper
      sx={{
        p: 0,
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'stretch',
      }}
    >
      <Box
        sx={{
          width: 72,
          flexShrink: 0,
          overflow: 'hidden',
          borderRight: 1,
          borderColor: 'divider',
        }}
      >
        <LandscapeThumb />
      </Box>
      <Box sx={{ p: 2, display: 'flex', flexDirection: 'column', gap: 1, minWidth: 0 }}>
        <Typography variant="caption" color="text.secondary">
          {entry.dateLabel}
        </Typography>
        <Typography variant="body2" color="text.secondary" noWrap>
          {entry.dumpPreview}
        </Typography>
        <Typography variant="body1" sx={{ fontWeight: 600 }}>
          {entry.oneThing}
        </Typography>
      </Box>
    </Paper>
  )
}
