import { Navigate, useParams } from 'react-router-dom'
import { ToolScreenLayout } from '../../components/layout/ToolScreenLayout'
import { useAnchorTool } from './AnchorTool'
import { useBreathTool } from './BreathTool'
import { getLandingToolMeta, type LandingToolId } from './LandingToolsHubPage'
import { useNameItTool } from './NameItTool'
import { useResetBodyTool } from './ResetBodyTool'

const VALID_IDS: LandingToolId[] = ['breath', 'reset-body', 'ground', 'name-it']

function isLandingToolId(id: string): id is LandingToolId {
  return VALID_IDS.includes(id as LandingToolId)
}

function LandingToolShell({
  toolId,
  tool,
}: {
  toolId: LandingToolId
  tool: { content: React.ReactNode; footer: React.ReactNode }
}) {
  const meta = getLandingToolMeta(toolId)!
  return (
    <ToolScreenLayout title={meta.title} subtitle={meta.description} backTo="/landing-tools" footer={tool.footer}>
      {tool.content}
    </ToolScreenLayout>
  )
}

function BreathToolPage() {
  const tool = useBreathTool()
  return <LandingToolShell toolId="breath" tool={tool} />
}

function ResetBodyToolPage() {
  const tool = useResetBodyTool()
  return <LandingToolShell toolId="reset-body" tool={tool} />
}

function GroundToolPage() {
  const tool = useAnchorTool()
  return <LandingToolShell toolId="ground" tool={tool} />
}

function NameItToolPage() {
  const tool = useNameItTool()
  return <LandingToolShell toolId="name-it" tool={tool} />
}

export function LandingToolPage() {
  const { toolId } = useParams<{ toolId: string }>()

  if (!toolId || !isLandingToolId(toolId)) {
    return <Navigate to="/landing-tools" replace />
  }

  switch (toolId) {
    case 'breath':
      return <BreathToolPage />
    case 'reset-body':
      return <ResetBodyToolPage />
    case 'ground':
      return <GroundToolPage />
    case 'name-it':
      return <NameItToolPage />
  }
}
