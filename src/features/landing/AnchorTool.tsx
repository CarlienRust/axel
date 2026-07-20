import { Box, Typography } from '@mui/material'
import { useState } from 'react'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'

const anchorSteps = [
  { count: 5, sense: COPY.anchorSee },
  { count: 4, sense: COPY.anchorTouch },
  { count: 3, sense: COPY.anchorHear },
  { count: 2, sense: COPY.anchorSmell },
  { count: 1, sense: COPY.anchorTaste },
]

export function AnchorTool() {
  const [stepIndex, setStepIndex] = useState(0)
  const step = anchorSteps[stepIndex]
  const isLast = stepIndex === anchorSteps.length - 1

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 3, py: 2 }}>
      <Typography variant="h3" component="p" align="center" sx={{ fontSize: '1.25rem' }}>
        {step ? `${step.count} — ${step.sense}` : ''}
      </Typography>
      <Box sx={{ display: 'flex', gap: 1.5 }}>
        {stepIndex > 0 && (
          <CalmButton variant="text" onClick={() => setStepIndex((i) => i - 1)}>
            {COPY.anchorBack}
          </CalmButton>
        )}
        {!isLast ? (
          <CalmButton variant="contained" onClick={() => setStepIndex((i) => i + 1)}>
            {COPY.anchorNext}
          </CalmButton>
        ) : (
          <CalmButton variant="outlined" onClick={() => setStepIndex(0)}>
            {COPY.anchorRestart}
          </CalmButton>
        )}
      </Box>
    </Box>
  )
}
