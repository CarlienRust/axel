import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import BuildOutlinedIcon from '@mui/icons-material/BuildOutlined'
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined'
import RouteOutlinedIcon from '@mui/icons-material/RouteOutlined'
import { Box, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ToolListCard } from '../../components/brand/ToolListCard'
import { ScreenShell } from '../../components/shared/ScreenShell'
import { COPY } from '../../constants/copy'
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

      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5, mt: session ? 1 : 0 }}>
        <ToolListCard
          title={COPY.reframeTitle}
          description={COPY.toolsReframeDesc}
          icon={<RouteOutlinedIcon />}
          onClick={() => navigate('/reframe')}
        />

        <ToolListCard
          title={COPY.landingToolsTitle}
          description={COPY.toolsLandingDesc}
          icon={<BuildOutlinedIcon />}
          onClick={() => navigate('/landing-tools')}
        />

        <ToolListCard
          title={COPY.prepTitle}
          description={COPY.toolsPrepDesc}
          icon={<AssignmentOutlinedIcon />}
          onClick={() => navigate('/prep')}
        />
      </Box>

      {!session && (
        <Typography variant="body2" color="text.secondary" sx={{ mt: 2 }}>
          {COPY.toolsFocusEmpty}
        </Typography>
      )}
    </ScreenShell>
  )
}
