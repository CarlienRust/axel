import { Box, Typography } from '@mui/material'
import { useEffect, useState, type ReactNode } from 'react'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'

type BreathPhase = 'inhale' | 'holdIn' | 'exhale' | 'holdOut'

const PHASE_DURATION_MS = 4000
const PHASES: BreathPhase[] = ['inhale', 'holdIn', 'exhale', 'holdOut']

const phaseLabel: Record<BreathPhase, string> = {
  inhale: COPY.breathIn,
  holdIn: COPY.breathHold,
  exhale: COPY.breathOut,
  holdOut: COPY.breathHold,
}

const phaseScale: Record<BreathPhase, number> = {
  inhale: 1.2,
  holdIn: 1.2,
  exhale: 0.75,
  holdOut: 0.75,
}

export function useBreathTool() {
  const [active, setActive] = useState(false)
  const [phaseIndex, setPhaseIndex] = useState(0)
  const phase = PHASES[phaseIndex]!

  useEffect(() => {
    if (!active) return
    const timer = setInterval(() => {
      setPhaseIndex((i) => (i + 1) % PHASES.length)
    }, PHASE_DURATION_MS)
    return () => clearInterval(timer)
  }, [active])

  function handleToggle() {
    if (active) {
      setActive(false)
      setPhaseIndex(0)
    } else {
      setActive(true)
    }
  }

  const content = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, py: 4 }}>
      <Box
        sx={{
          width: 160,
          height: 160,
          borderRadius: '50%',
          bgcolor: 'primary.main',
          opacity: 0.9,
          transform: `scale(${active ? phaseScale[phase] : 1})`,
          transition: active ? `transform ${PHASE_DURATION_MS}ms ease-in-out` : 'transform 0.4s ease',
        }}
      />
      <Typography variant="body1" color="text.secondary">
        {active ? phaseLabel[phase] : COPY.breathIdle}
      </Typography>
    </Box>
  )

  const footer: ReactNode = (
    <CalmButton variant={active ? 'outlined' : 'contained'} fullWidth onClick={handleToggle}>
      {active ? COPY.breathStop : COPY.breathStart}
    </CalmButton>
  )

  return { content, footer }
}
