import {
  Box,
  Button,
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'
import { useState } from 'react'
import { COPY } from '../../constants/copy'

type HeldListDialogProps = {
  open: boolean
  onClose: () => void
  items: string[]
  fullDumpContent?: string
}

export function HeldListDialog({ open, onClose, items, fullDumpContent }: HeldListDialogProps) {
  const [showFullDump, setShowFullDump] = useState(false)

  function handleClose() {
    setShowFullDump(false)
    onClose()
  }

  const canToggleFullDump = Boolean(fullDumpContent?.trim())

  return (
    <Dialog open={open} onClose={handleClose} fullWidth maxWidth="sm">
      <DialogContent sx={{ py: 3 }}>
        {showFullDump && fullDumpContent ? (
          <Typography
            variant="body2"
            color="text.secondary"
            sx={{ whiteSpace: 'pre-wrap', lineHeight: 1.7, maxHeight: 360, overflow: 'auto' }}
          >
            {fullDumpContent}
          </Typography>
        ) : (
          <List disablePadding dense>
            {items.map((item) => (
              <ListItem key={item} disableGutters sx={{ py: 1 }}>
                <ListItemText
                  primary={item}
                  primaryTypographyProps={{ variant: 'body1', color: 'text.secondary' }}
                />
              </ListItem>
            ))}
            {items.length === 0 && (
              <Typography variant="body2" color="text.secondary">
                Everything you shared is held here.
              </Typography>
            )}
          </List>
        )}

        {canToggleFullDump && (
          <Box sx={{ mt: 2, textAlign: 'center' }}>
            <Button
              variant="text"
              onClick={() => setShowFullDump((v) => !v)}
              sx={{ textTransform: 'none', fontWeight: 500 }}
            >
              {showFullDump ? COPY.heldSeeSummary : COPY.heldSeeFullDump}
            </Button>
          </Box>
        )}
      </DialogContent>
    </Dialog>
  )
}
