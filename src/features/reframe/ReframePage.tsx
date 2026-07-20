import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import FormatQuoteOutlinedIcon from '@mui/icons-material/FormatQuoteOutlined'
import { Box } from '@mui/material'
import { QuoteBlock } from '../../components/brand/ContentCards'
import { CalmButton } from '../../components/shared/CalmButton'
import { CenteredScreen } from '../../components/shared/CenteredScreen'
import { PageHeader } from '../../components/layout/PageLayout'
import { COPY } from '../../constants/copy'
import { REFRAMES } from './reframes'

export function ReframePage() {
  const navigate = useNavigate()
  const [index, setIndex] = useState(0)
  const reframe = REFRAMES[index % REFRAMES.length]!

  function handleNext() {
    setIndex((i) => (i + 1) % REFRAMES.length)
  }

  return (
    <CenteredScreen align="top">
      <PageHeader title={COPY.reframeTitle} subtitle={COPY.reframeSubtitle} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, py: 2 }}>
        <Box sx={{ display: 'flex', justifyContent: 'center', color: 'primary.main', opacity: 0.35 }}>
          <FormatQuoteOutlinedIcon sx={{ fontSize: 48 }} />
        </Box>
        <QuoteBlock>{reframe.body}</QuoteBlock>
        <Box sx={{ display: 'flex', gap: 1.5, justifyContent: 'center', flexWrap: 'wrap' }}>
          <CalmButton variant="contained" onClick={handleNext}>
            {COPY.reframeNext}
          </CalmButton>
          <CalmButton variant="text" onClick={() => navigate('/tools')}>
            {COPY.reframeBackTools}
          </CalmButton>
        </Box>
      </Box>
    </CenteredScreen>
  )
}
