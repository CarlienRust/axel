import { Box, Typography } from '@mui/material'
import { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { QuoteBlock } from '../../components/brand/ContentCards'
import { CHECKIN_ACK_DELAY_MS, getCheckinAck } from '../../constants/checkin'
import { CalmButton } from '../../components/shared/CalmButton'
import { CenteredScreen } from '../../components/shared/CenteredScreen'
import { PageHeader } from '../../components/layout/PageLayout'
import { COPY, returnReadyKey } from '../../constants/copy'
import { getNextReframe, peekReframe } from '../reframe/reframeRotation'
import type { Reframe } from '../reframe/reframes'
import { createCheckin, getCheckinByResponseId, getResponseByDumpId } from '../../services/storage'
import type { CheckinAnswer } from '../../types/storage'

const checkinOptions: { label: string; value: CheckinAnswer }[] = [
  { label: COPY.checkinYes, value: 'yes' },
  { label: COPY.checkinALittle, value: 'a_little' },
  { label: COPY.checkinNotYet, value: 'not_yet' },
]

type CheckinPhase = 'question' | 'acknowledgment' | 'reframe'

export function ReturnPage() {
  const { dumpId } = useParams<{ dumpId: string }>()
  const navigate = useNavigate()
  const response = dumpId ? getResponseByDumpId(dumpId) : undefined
  const existingCheckin = response ? getCheckinByResponseId(response.id) : undefined
  const [phase, setPhase] = useState<CheckinPhase>(existingCheckin ? 'reframe' : 'question')
  const [ackMessage, setAckMessage] = useState('')
  const [reframe, setReframe] = useState<Reframe | null>(
    existingCheckin ? peekReframe() : null,
  )

  useEffect(() => {
    if (!dumpId) return
    const returnAt = Number(sessionStorage.getItem(returnReadyKey(dumpId)))
    if (returnAt && Date.now() < returnAt) {
      navigate(`/response/${dumpId}`, { replace: true })
    }
  }, [dumpId, navigate])

  useEffect(() => {
    if (phase !== 'acknowledgment') return
    const timer = setTimeout(() => {
      setReframe(getNextReframe())
      setPhase('reframe')
    }, CHECKIN_ACK_DELAY_MS)
    return () => clearTimeout(timer)
  }, [phase])

  function handleCheckin(answer: CheckinAnswer) {
    if (!response) return
    createCheckin(response.id, answer)
    setAckMessage(getCheckinAck(answer))
    setPhase('acknowledgment')
  }

  if (!dumpId || !response) {
    return (
      <CenteredScreen showCrisisLink align="top">
        <Typography align="center" color="text.secondary">
          {COPY.emptyState}
        </Typography>
      </CenteredScreen>
    )
  }

  if (phase === 'reframe' && reframe) {
    return (
      <CenteredScreen showCrisisLink align="top">
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4, py: 2 }}>
          <QuoteBlock>{reframe.body}</QuoteBlock>
          <CalmButton variant="contained" onClick={() => navigate('/')} sx={{ alignSelf: 'center' }}>
            {COPY.continueHome}
          </CalmButton>
        </Box>
      </CenteredScreen>
    )
  }

  if (phase === 'acknowledgment') {
    return (
      <CenteredScreen showCrisisLink align="top">
        <Box sx={{ py: 6, px: 2, textAlign: 'center' }}>
          <Typography variant="body1" color="text.secondary" sx={{ lineHeight: 1.75, fontSize: '1.0625rem' }}>
            {ackMessage}
          </Typography>
        </Box>
      </CenteredScreen>
    )
  }

  return (
    <CenteredScreen showCrisisLink align="top">
      <PageHeader title={COPY.checkinQuestion} />
      <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, justifyContent: 'center' }}>
        {checkinOptions.map((option) => (
          <CalmButton
            key={option.value}
            variant="outlined"
            onClick={() => handleCheckin(option.value)}
          >
            {option.label}
          </CalmButton>
        ))}
      </Box>
    </CenteredScreen>
  )
}
