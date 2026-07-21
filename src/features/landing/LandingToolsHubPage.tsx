import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { renderFeatureIcon, type FeatureIconName } from '../../components/brand/featureIcons'
import type { MicroIllustrationId } from '../../components/brand/MicroIllustration'
import { ToolListCard } from '../../components/brand/ToolListCard'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { COPY } from '../../constants/copy'
import { layout } from '../../theme/layout'

const landingTools: {
  id: 'breath' | 'reset-body' | 'ground' | 'name-it'
  title: string
  description: string
  icon: FeatureIconName
  illustration: MicroIllustrationId
}[] = [
  {
    id: 'breath',
    title: COPY.landingBreath,
    description: COPY.landingBreathDesc,
    icon: 'breath',
    illustration: 'breathe',
  },
  {
    id: 'reset-body',
    title: COPY.landingResetBody,
    description: COPY.landingResetBodyDesc,
    icon: 'resetBody',
    illustration: 'reset_body',
  },
  {
    id: 'ground',
    title: COPY.landingGround,
    description: COPY.landingGroundDesc,
    icon: 'ground',
    illustration: 'ground',
  },
  {
    id: 'name-it',
    title: COPY.landingNameIt,
    description: COPY.landingNameItDesc,
    icon: 'nameIt',
    illustration: 'what_is_happening',
  },
]

export type LandingToolId = (typeof landingTools)[number]['id']

export function LandingToolsHubPage() {
  const navigate = useNavigate()

  return (
    <ToolScreenLayout
      title={COPY.landingToolsTitle}
      subtitle={COPY.landingToolsSubtitle}
      illustration="landing"
    >
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: layout.cardListGap }}>
        {landingTools.map((tool) => (
          <ToolListCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={renderFeatureIcon(tool.icon)}
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
