import { Box, Tab, Tabs } from '@mui/material'
import { useState } from 'react'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { COPY } from '../../constants/copy'
import { useAnchorTool } from './AnchorTool'
import { useBreathTool } from './BreathTool'
import { usePostponeTool } from './PostponeTool'

const tabLabels = [COPY.groundTabBreath, COPY.groundTabAnchor, COPY.groundTabPostpone] as const

export function GroundPage() {
  const [tab, setTab] = useState(0)
  const breath = useBreathTool()
  const anchor = useAnchorTool()
  const postpone = usePostponeTool()
  const tools = [breath, anchor, postpone]
  const active = tools[tab]!

  return (
    <ToolScreenLayout title={COPY.groundTitle} subtitle={COPY.groundSubtitle} footer={active.footer}>
      <Tabs
        value={tab}
        onChange={(_, v) => setTab(v)}
        variant="fullWidth"
        sx={{
          mb: 2,
          minHeight: 44,
          '& .MuiTabs-flexContainer': {
            gap: 1,
          },
          '& .MuiTab-root': {
            textTransform: 'none',
            fontWeight: 600,
            fontSize: '0.875rem',
            minHeight: 44,
            borderRadius: '999px',
            border: 1,
            borderColor: 'divider',
            bgcolor: 'background.paper',
            color: 'text.secondary',
            '&.Mui-selected': {
              bgcolor: 'primary.dark',
              color: 'primary.contrastText',
              borderColor: 'primary.dark',
            },
          },
          '& .MuiTabs-indicator': {
            display: 'none',
          },
        }}
      >
        {tabLabels.map((label) => (
          <Tab key={label} label={label} />
        ))}
      </Tabs>
      <Box key={tab}>{active.content}</Box>
    </ToolScreenLayout>
  )
}
