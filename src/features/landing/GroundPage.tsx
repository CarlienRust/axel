import AirOutlinedIcon from '@mui/icons-material/AirOutlined'
import HourglassEmptyOutlinedIcon from '@mui/icons-material/HourglassEmptyOutlined'
import SpaOutlinedIcon from '@mui/icons-material/SpaOutlined'
import { Box } from '@mui/material'
import { useState } from 'react'
import { ToolListCard } from '../../components/brand/ToolListCard'
import { ScreenShell } from '../../components/shared/ScreenShell'
import { COPY } from '../../constants/copy'
import { AnchorTool } from './AnchorTool'
import { BreathTool } from './BreathTool'
import { PostponeTool } from './PostponeTool'

type GroundTool = 'breath' | 'anchor' | 'postpone'

const tools = [
  { id: 'breath' as const, title: COPY.groundBreath, description: COPY.groundBreathDesc, icon: <AirOutlinedIcon /> },
  { id: 'anchor' as const, title: COPY.groundAnchor, description: COPY.groundAnchorDesc, icon: <SpaOutlinedIcon /> },
  {
    id: 'postpone' as const,
    title: COPY.groundPostpone,
    description: COPY.groundPostponeDesc,
    icon: <HourglassEmptyOutlinedIcon />,
  },
]

export function GroundPage() {
  const [selected, setSelected] = useState<GroundTool | null>(null)

  return (
    <ScreenShell title={COPY.groundTitle} subtitle={COPY.groundSubtitle}>
      <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1.5 }}>
        {tools.map((tool) => (
          <ToolListCard
            key={tool.id}
            title={tool.title}
            description={tool.description}
            icon={tool.icon}
            selected={selected === tool.id}
            onClick={() => setSelected(selected === tool.id ? null : tool.id)}
          />
        ))}
      </Box>
      {selected && (
        <Box sx={{ mt: 3, pt: 3, borderTop: 1, borderColor: 'divider' }}>
          {selected === 'breath' && <BreathTool />}
          {selected === 'anchor' && <AnchorTool />}
          {selected === 'postpone' && <PostponeTool />}
        </Box>
      )}
    </ScreenShell>
  )
}
