import { Typography } from '@mui/material'
import { useParams } from 'react-router-dom'
import { ScreenShell } from '../../components/shared/ScreenShell'

export function OneThingPage() {
  const { dumpId } = useParams<{ dumpId: string }>()

  return (
    <ScreenShell title="One thing">
      <Typography variant="body1" color="text.secondary">
        Axel's response for dump {dumpId} ships on Day 4.
      </Typography>
    </ScreenShell>
  )
}
