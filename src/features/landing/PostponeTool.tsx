import { Box, Typography } from '@mui/material'
import { useEffect, useState, type ReactNode } from 'react'
import { useNavigate } from 'react-router-dom'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'

const POSTPONE_MS = 20 * 60 * 1000

function formatRemaining(ms: number): string {
  const totalSec = Math.ceil(ms / 1000)
  const min = Math.floor(totalSec / 60)
  const sec = totalSec % 60
  return `${min}:${sec.toString().padStart(2, '0')}`
}

export function usePostponeTool() {
  const navigate = useNavigate()
  const [endsAt, setEndsAt] = useState<number | null>(null)
  const [remaining, setRemaining] = useState(0)

  useEffect(() => {
    if (!endsAt) return
    const tick = () => {
      const left = endsAt - Date.now()
      if (left <= 0) {
        setEndsAt(null)
        setRemaining(0)
        navigate('/')
        return
      }
      setRemaining(left)
    }
    tick()
    const id = setInterval(tick, 1000)
    return () => clearInterval(id)
  }, [endsAt, navigate])

  const active = endsAt !== null

  const content = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, py: 4 }}>
      <Typography variant="body1" color="text.secondary" align="center">
        {COPY.postponeDescription}
      </Typography>
      {active && (
        <Typography variant="h2" component="p" sx={{ fontVariantNumeric: 'tabular-nums' }}>
          {formatRemaining(remaining)}
        </Typography>
      )}
    </Box>
  )

  const footer: ReactNode = !active ? (
    <CalmButton variant="contained" fullWidth onClick={() => setEndsAt(Date.now() + POSTPONE_MS)}>
      {COPY.postponeStart}
    </CalmButton>
  ) : (
    <CalmButton variant="outlined" fullWidth onClick={() => { setEndsAt(null); setRemaining(0) }}>
      {COPY.postponeCancel}
    </CalmButton>
  )

  return { content, footer }
}
