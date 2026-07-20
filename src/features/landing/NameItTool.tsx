import { Box, Typography } from '@mui/material'
import { useState, type ReactNode } from 'react'
import { CalmButton } from '../../components/shared/CalmButton'
import { CalmTextArea } from '../../components/shared/CalmTextArea'
import { COPY } from '../../constants/copy'

export function useNameItTool() {
  const [value, setValue] = useState('')
  const [done, setDone] = useState(false)

  const content = (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 2, py: 2 }}>
      <Typography variant="body1" fontWeight={600}>
        {COPY.nameItPrompt}
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {COPY.nameItHint}
      </Typography>
      <CalmTextArea
        value={value}
        onChange={(e) => {
          setValue(e.target.value)
          setDone(false)
        }}
        minRows={4}
        placeholder=""
        slotProps={{ htmlInput: { 'aria-label': COPY.nameItPrompt } }}
      />
      {done && value.trim() && (
        <Typography variant="body2" color="text.secondary" sx={{ fontStyle: 'italic' }}>
          Named. You can move on when you are ready.
        </Typography>
      )}
    </Box>
  )

  const footer: ReactNode = (
    <CalmButton
      variant="contained"
      fullWidth
      disabled={!value.trim()}
      onClick={() => setDone(true)}
    >
      {done ? COPY.anchorRestart : 'Done'}
    </CalmButton>
  )

  return { content, footer }
}
