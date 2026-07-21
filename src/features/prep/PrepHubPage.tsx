import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { renderFeatureIcon, type FeatureIconName } from '../../components/brand/featureIcons'
import { ToolListCard } from '../../components/brand/ToolListCard'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { COPY } from '../../constants/copy'
import { layout } from '../../theme/layout'
import { prepSections, type PrepSectionId } from './prepSections'

const prepIconBySection: Record<PrepSectionId, FeatureIconName> = {
  'my-story': 'myStory',
  patterns: 'patterns',
  timeline: 'timeline',
}

export function PrepHubPage() {
  const navigate = useNavigate()

  return (
    <ToolScreenLayout title={COPY.prepTitle} subtitle={COPY.prepSubtitle} illustration="preparation">
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: layout.cardListGap }}>
        {prepSections.map((section) => (
          <ToolListCard
            key={section.id}
            title={section.title}
            description={section.description}
            icon={renderFeatureIcon(prepIconBySection[section.id])}
            onClick={() => navigate(`/prep/${section.id}`)}
          />
        ))}
      </Box>
    </ToolScreenLayout>
  )
}
