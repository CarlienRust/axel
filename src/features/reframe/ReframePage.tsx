import { Box } from '@mui/material'
import { useState } from 'react'
import { QuoteBlock } from '../../components/brand/ContentCards'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'
import { useSpeechSynthesis } from '../../hooks/useSpeechSynthesis'
import { REFRAMES } from './reframes'

export function ReframePage() {
  const [index, setIndex] = useState(0)
  const reframe = REFRAMES[index % REFRAMES.length]!
  const { supported, isSpeaking, speak, stop, toggle } = useSpeechSynthesis()

  function handleNext() {
    stop()
    const nextIndex = (index + 1) % REFRAMES.length
    setIndex(nextIndex)
    speak(REFRAMES[nextIndex]!.body)
  }

  return (
    <ToolScreenLayout
      title={COPY.reframeTitle}
      subtitle={COPY.reframeSubtitle}
      illustration="reframe"
      footer={
        <Box sx={{ display: 'flex', gap: 1.5, width: '100%' }}>
          {supported && (
            <CalmButton
              variant="outlined"
              onClick={() => toggle(reframe.body)}
              aria-label={isSpeaking ? COPY.ariaReframeStop : COPY.ariaReframeListen}
              sx={{ flex: 1 }}
            >
              {isSpeaking ? COPY.reframeStop : COPY.reframeListen}
            </CalmButton>
          )}
          <CalmButton variant="contained" onClick={handleNext} sx={{ flex: supported ? 1 : undefined, width: supported ? undefined : '100%' }}>
            {COPY.reframeNext}
          </CalmButton>
        </Box>
      }
    >
      <QuoteBlock>{reframe.body}</QuoteBlock>
    </ToolScreenLayout>
  )
}
