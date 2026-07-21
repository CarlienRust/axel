import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline'
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { renderFeatureIcon } from '../../components/brand/featureIcons'
import { ToolListCard } from '../../components/brand/ToolListCard'
import { CalmButton } from '../../components/shared/CalmButton'
import { ScreenShell } from '../../components/shared/ScreenShell'
import { COPY, returnReadyKey } from '../../constants/copy'
import { layout } from '../../theme/layout'
import { JournalList } from '../journal/JournalList'
import { getSessionResume } from '../navigation/sessionState'

export function LibraryPage() {
  const navigate = useNavigate()
  const session = getSessionResume()

  function openCheckIn() {
    if (!session) return
    sessionStorage.setItem(returnReadyKey(session.dumpId), '0')
    navigate(`/return/${session.dumpId}`)
  }

  return (
    <ScreenShell title={COPY.libraryTitle} subtitle={COPY.librarySubtitle} illustration="library">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: layout.cardListGap }}>
        <ToolListCard
          title={COPY.brainDumpTitle}
          description={COPY.libraryBrainDumpDesc}
          icon={renderFeatureIcon('brainDump')}
          onClick={() => navigate('/dump')}
        />

        {session && !session.checkInComplete && session.checkInReady && (
          <ToolListCard
            title={COPY.libraryCheckIn}
            description={COPY.checkinQuestion}
            icon={<CheckCircleOutlineIcon />}
            onClick={openCheckIn}
          />
        )}

        {session && !session.checkInComplete && !session.checkInReady && (
          <ToolListCard
            title={COPY.libraryContinueFocus}
            description={session.oneThing}
            icon={<CenterFocusStrongOutlinedIcon />}
            onClick={() => navigate(`/response/${session.dumpId}`)}
          />
        )}
      </Box>

      <Box>
        <Typography variant="h3" component="h2" sx={{ fontSize: '1.125rem', fontWeight: 600, mb: layout.stackGap }}>
          {COPY.libraryRecent}
        </Typography>
        <JournalList limit={3} />
        <CalmButton
          variant="text"
          onClick={() => navigate('/profile')}
          sx={{ mt: 2, alignSelf: 'flex-start' }}
        >
          {COPY.librarySeeAllJournal}
        </CalmButton>
      </Box>
    </ScreenShell>
  )
}
