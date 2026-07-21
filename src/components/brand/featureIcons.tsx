import AccessibilityNewOutlinedIcon from '@mui/icons-material/AccessibilityNewOutlined'
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined'
import AirOutlinedIcon from '@mui/icons-material/AirOutlined'
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined'
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined'
import ChatBubbleOutlineOutlinedIcon from '@mui/icons-material/ChatBubbleOutlineOutlined'
import ContactPageOutlinedIcon from '@mui/icons-material/ContactPageOutlined'
import EnergySavingsLeafOutlinedIcon from '@mui/icons-material/EnergySavingsLeafOutlined'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined'
import MenuBookOutlinedIcon from '@mui/icons-material/MenuBookOutlined'
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined'
import ShowChartOutlinedIcon from '@mui/icons-material/ShowChartOutlined'
import TimelineOutlinedIcon from '@mui/icons-material/TimelineOutlined'
import type { SvgIconProps } from '@mui/material'

/** Feature icons — see product icon map in docs */
export const featureIcons = {
  home: HomeOutlinedIcon,
  brainDump: PsychologyOutlinedIcon,
  reframe: AutoAwesomeOutlinedIcon,
  landingTools: AirOutlinedIcon,
  preparation: ArticleOutlinedIcon,
  myStory: ContactPageOutlinedIcon,
  patterns: ShowChartOutlinedIcon,
  timeline: TimelineOutlinedIcon,
  breath: AirOutlinedIcon,
  resetBody: AccessibilityNewOutlinedIcon,
  ground: EnergySavingsLeafOutlinedIcon,
  nameIt: ChatBubbleOutlineOutlinedIcon,
  library: MenuBookOutlinedIcon,
  profile: AccountCircleOutlinedIcon,
} as const

export type FeatureIconName = keyof typeof featureIcons

export function FeatureIcon({ icon, ...props }: { icon: FeatureIconName } & SvgIconProps) {
  const Icon = featureIcons[icon]
  return <Icon {...props} />
}

export function renderFeatureIcon(icon: FeatureIconName, props?: SvgIconProps) {
  return <FeatureIcon icon={icon} {...props} />
}
