import AirOutlinedIcon from '@mui/icons-material/AirOutlined'
import CloudOutlinedIcon from '@mui/icons-material/CloudOutlined'
import LinearScaleOutlinedIcon from '@mui/icons-material/LinearScaleOutlined'
import SelfImprovementOutlinedIcon from '@mui/icons-material/SelfImprovementOutlined'
import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ToolListCard } from '../../components/brand/ToolListCard'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { COPY } from '../../constants/copy'

const landingTools = [
  {
    id: 'breath',
    title: COPY.landingBreath,
    description: COPY.landingBreathDesc,
    icon: <AirOutlinedIcon />,
  },
  {
    id: 'reset-body',
    title: COPY.landingResetBody,
    description: COPY.landingResetBodyDesc,
    icon: <SelfImprovementOutlinedIcon />,
  },
  {
    id: 'ground',
    title: COPY.landingGround,
    description: COPY.landingGroundDesc,
    icon: <LinearScaleOutlinedIcon />,
  },
  {
    id: 'name-it',
    title: COPY.landingNameIt,
    description: COPY.landingNameItDesc,
    icon: <CloudOutlinedIcon />,
  },
] as const

export type LandingToolId = (typeof landingTools)[number]['id']

export function LandingToolsHubPage() {
  const navigate = useNavigate()

  return (
    <ToolScreenLayout title={COPY.landingToolsTitle} subtitle={COPY.landingToolsSubtitle}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {landingTools.map((tool) => (
          <ToolListCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            onClick={() => navigate(`/landing-tools/${tool.id}`)}
          />
        ))}
      </Box>
    </ToolScreenLayout>
  )
}

export function getLandingToolMeta(id: string) {
  return landingTools.find((t) => t.id === id)
}
