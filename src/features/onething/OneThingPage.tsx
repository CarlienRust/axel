import { Alert, Box, Typography } from '@mui/material'
import { useEffect, useRef, useState } from 'react'
import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { FocusCard } from '../../components/brand/ContentCards'
import { CalmButton } from '../../components/shared/CalmButton'
import { CenteredScreen } from '../../components/shared/CenteredScreen'
import { HeldListDialog } from '../../components/shared/HeldListDialog'
import { PageHeader } from '../../components/layout/PageLayout'
import { COPY, focusPausedKey, returnReadyKey } from '../../constants/copy'
import { layout } from '../../theme/layout'
import { RETURN_DELAY_MS } from '../../constants/timing'
import { getDump, getResponseByDumpId } from '../../services/storage'
import { heldItemsFromDump, parseAxelAiResponse } from '../../types/gemini'

/** Screen three — The one thing */
export function OneThingPage() {
  const { dumpId } = useParams<{ dumpId: string }>()
  const navigate = useNavigate()
  const location = useLocation()
  const [heldOpen, setHeldOpen] = useState(false)
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null)
  const fromDump = (location.state as { fromDump?: boolean } | null)?.fromDump === true

  const dump = dumpId ? getDump(dumpId) : undefined
  const response = dumpId ? getResponseByDumpId(dumpId) : undefined

  useEffect(() => {
    if (!dumpId || !fromDump) return

    sessionStorage.removeItem(focusPausedKey(dumpId))

    const key = returnReadyKey(dumpId)
    const existing = sessionStorage.getItem(key)
    if (!existing) {
      sessionStorage.setItem(key, String(Date.now() + RETURN_DELAY_MS))
    }

    const returnAt = Number(sessionStorage.getItem(key))
    const delay = Math.max(0, returnAt - Date.now())
    timerRef.current = setTimeout(() => navigate(`/return/${dumpId}`), delay)
    return () => {
      if (timerRef.current) clearTimeout(timerRef.current)
    }
  }, [dumpId, fromDump, navigate])

  function goToCheckIn() {
    if (!dumpId) return
    if (timerRef.current) clearTimeout(timerRef.current)
    sessionStorage.removeItem(focusPausedKey(dumpId))
    sessionStorage.setItem(returnReadyKey(dumpId), '0')
    navigate(`/return/${dumpId}`)
  }

  function stayOnFocus() {
    if (!dumpId) return
    if (timerRef.current) clearTimeout(timerRef.current)
    sessionStorage.setItem(focusPausedKey(dumpId), '1')
  }

  if (!dumpId || !response || !dump) {
    return (
      <CenteredScreen align="top">
        <Typography align="center" color="text.secondary">
          {COPY.emptyState}
        </Typography>
      </CenteredScreen>
    )
  }

  let ai
  try {
    ai = parseAxelAiResponse(response.content)
  } catch {
    return (
      <CenteredScreen align="top">
        <Typography align="center" color="text.secondary">
          Axel could not read this response.
        </Typography>
      </CenteredScreen>
    )
  }

  const heldItems = heldItemsFromDump(dump.content, ai)

  return (
    <CenteredScreen align="top">
      <PageHeader title={COPY.focusTitle} subtitle={COPY.focusLabel} />
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: layout.sectionGap }}>
        {ai.crisisFlag && (
          <Alert severity="warning" sx={{ textAlign: 'left' }}>
            If you're in crisis, please reach SADAG at 0800 21 22 23 or talk to someone you
            trust right now.
          </Alert>
        )}

        <FocusCard>
          <Typography
            sx={{
              fontSize: { xs: '1.25rem', sm: '1.5rem' },
              fontWeight: 600,
              lineHeight: 1.5,
              color: 'text.primary',
            }}
          >
            {ai.oneThing}
          </Typography>
        </FocusCard>

        <Typography
          component="button"
          type="button"
          variant="body2"
          color="text.secondary"
          onClick={() => setHeldOpen(true)}
          sx={{
            background: 'none',
            border: 'none',
            cursor: 'pointer',
            font: 'inherit',
            textAlign: 'center',
            opacity: 0.7,
            '&:hover': { opacity: 1 },
          }}
        >
          {COPY.everythingElseIsHeld}
        </Typography>

        {fromDump && (
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: layout.stackGap, pt: 1 }}>
            <CalmButton variant="contained" fullWidth onClick={goToCheckIn}>
              {COPY.focusCheckInNow}
            </CalmButton>
            <CalmButton variant="text" fullWidth onClick={stayOnFocus}>
              {COPY.focusNeedMoment}
            </CalmButton>
          </Box>
        )}
      </Box>

      <HeldListDialog
        open={heldOpen}
        onClose={() => setHeldOpen(false)}
        items={heldItems}
        fullDumpContent={dump.content}
      />
    </CenteredScreen>
  )
}
