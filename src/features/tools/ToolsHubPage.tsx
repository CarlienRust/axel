import AssignmentOutlinedIcon from '@mui/icons-material/AssignmentOutlined'
import CenterFocusStrongOutlinedIcon from '@mui/icons-material/CenterFocusStrongOutlined'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined'
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
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {session ? (
          <ToolListCard
            title={COPY.navFocus}
            description={session.oneThing}
            icon={<CenterFocusStrongOutlinedIcon />}
            onClick={() => navigate(`/response/${session.dumpId}`)}
          />
        ) : (
          <Box
            sx={{
              p: 2,
              borderRadius: '16px',
              border: 1,
              borderColor: 'divider',
              bgcolor: 'background.paper',
            }}
          >
            <Typography variant="body1" fontWeight={600} gutterBottom>
              {COPY.navFocus}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {COPY.toolsFocusEmpty}
            </Typography>
          </Box>
        )}

        <ToolListCard
          title={COPY.groundTitle}
          description={COPY.toolsGroundDesc}
          icon={<SpaOutlinedIcon />}
          onClick={() => navigate('/ground')}
        />

        <ToolListCard
          title={COPY.prepTitle}
          description={COPY.toolsPrepDesc}
          icon={<AssignmentOutlinedIcon />}
          onClick={() => navigate('/prep')}
        />
      </Box>
    </ScreenShell>
  )
}
