import { Box, Typography } from '@mui/material'
import { useState, type ReactNode } from 'react'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'

const resetSteps = [
  COPY.resetBodyStep1,
  COPY.resetBodyStep2,
  COPY.resetBodyStep3,
  COPY.resetBodyStep4,
]

export function useResetBodyTool() {
  const [stepIndex, setStepIndex] = useState(0)
  const isLast = stepIndex === resetSteps.length - 1
  const step = resetSteps[stepIndex]

  const content = (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, py: 4 }}>
      <Typography variant="body1" color="text.secondary" align="center" sx={{ lineHeight: 1.75, maxWidth: 320 }}>
        {step}
      </Typography>
    </Box>
  )

  const footer: ReactNode = (
    <Box sx={{ display: 'flex', gap: 1.5, width: '100%' }}>
      {stepIndex > 0 && (
        <CalmButton variant="outlined" fullWidth onClick={() => setStepIndex((i) => i - 1)}>
          {COPY.anchorBack}
        </CalmButton>
      )}
      {!isLast ? (
        <CalmButton variant="contained" fullWidth onClick={() => setStepIndex((i) => i + 1)}>
          {COPY.anchorNext}
        </CalmButton>
      ) : (
        <CalmButton variant="contained" fullWidth onClick={() => setStepIndex(0)}>
          {COPY.anchorRestart}
        </CalmButton>
      )}
    </Box>
  )

  return { content, footer }
}
