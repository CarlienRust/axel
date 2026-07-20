import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined'
import { Box } from '@mui/material'
import { useState } from 'react'
import { QuoteBlock } from '../../components/brand/ContentCards'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { CalmButton } from '../../components/shared/CalmButton'
import { COPY } from '../../constants/copy'
import { REFRAMES } from './reframes'

export function ReframePage() {
  const [index, setIndex] = useState(0)
  const reframe = REFRAMES[index % REFRAMES.length]!

  return (
    <ToolScreenLayout
      title={COPY.reframeTitle}
      subtitle={COPY.reframeSubtitle}
      footer={
        <CalmButton variant="contained" fullWidth onClick={() => setIndex((i) => (i + 1) % REFRAMES.length)}>
          {COPY.reframeNext}
        </CalmButton>
      }
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, py: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', color: 'primary.main', opacity: 0.35 }}>
          <FormatQuoteOutlinedIcon sx={{ fontSize: 48 }} />
        </Box>
        <QuoteBlock>{reframe.body}</QuoteBlock>
      </Box>
    </ToolScreenLayout>
  )
}
