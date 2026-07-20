import {
  Dialog,
  DialogContent,
  List,
  ListItem,
  ListItemText,
  Typography,
} from '@mui/material'

type HeldListDialogProps = {
  open: boolean
  onClose: () => void
  items: string[]
}

export function HeldListDialog({ open, onClose, items }: HeldListDialogProps) {
  return (
    <Dialog open={open} onClose={onClose} fullWidth maxWidth="sm">
      <DialogContent sx={{ py: 3 }}>
        <List disablePadding dense>
          {items.map((item) => (
            <ListItem key={item} disableGutters sx={{ py: 1 }}>
              <ListItemText
                primary={item}
                primaryTypographyProps={{ variant: 'body1', color: 'text.secondary' }}
              />
            </ListItem>
          ))}
        </List>
        {items.length === 0 && (
          <Typography variant="body2" color="text.secondary">
            Everything you shared is held here.
          </Typography>
        )}
      </DialogContent>
    </Dialog>
  )
}
