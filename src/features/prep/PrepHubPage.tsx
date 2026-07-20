import { Box } from '@mui/material'
import { useNavigate } from 'react-router-dom'
import { ThreadThumb } from '../../components/brand/ThreadIllustration'
import { ToolListCard } from '../../components/brand/ToolListCard'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { COPY } from '../../constants/copy'
import { prepSections } from './prepSections'

export function PrepHubPage() {
  const navigate = useNavigate()

  return (
    <ToolScreenLayout title={COPY.prepTitle} subtitle={COPY.prepSubtitle}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {prepSections.map((section) => (
          <ToolListCard
            key={section.id}
            title={section.title}
            description={section.description}
            icon={<ThreadThumb resolve={section.resolve} />}
            onClick={() => navigate(`/prep/${section.id}`)}
          />
        ))}
      </Box>
    </ToolScreenLayout>
  )
}
