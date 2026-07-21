import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { renderFeatureIcon } from '../../components/brand/featureIcons'
import { ToolListCard } from '../../components/brand/ToolListCard'
import { ScreenShell } from '../../components/shared/ScreenShell'
import { COPY } from '../../constants/copy'
import { layout } from '../../theme/layout'
import { getSessionResume } from '../navigation/sessionState'

export function ToolsHubPage() {
  const navigate = useNavigate()
  const session = getSessionResume()

  return (
    <ScreenShell title={COPY.toolsTitle} subtitle={COPY.toolsSubtitle}>
      {session && (
        <ToolListCard
          title={COPY.navFocus}
          description={session.oneThing}
          icon={<CenterFocusStrongOutlinedIcon />}
          onClick={() => navigate(`/response/${session.dumpId}`)}
        />
      )}

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: layout.cardListGap }}>
        <ToolListCard
          title={COPY.reframeTitle}
          description={COPY.toolsReframeDesc}
          icon={renderFeatureIcon('reframe')}
          onClick={() => navigate('/reframe')}
        />

        <ToolListCard
          title={COPY.landingToolsTitle}
          description={COPY.toolsLandingDesc}
          icon={renderFeatureIcon('landingTools')}
          onClick={() => navigate('/landing-tools')}
        />

        <ToolListCard
          title={COPY.prepTitle}
          description={COPY.toolsPrepDesc}
          icon={renderFeatureIcon('preparation')}
          onClick={() => navigate('/prep')}
        />
      </Box>

      {!session && (
        <Typography variant="body2" color="text.secondary">
          {COPY.toolsFocusEmpty}
        </Typography>
      )}
    </ScreenShell>
  )
}
