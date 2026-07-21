import { Box } from '@mui/material'
import allImg from '../../assets/illustrations/all.png'
import brainDumpImg from '../../assets/illustrations/brain_dump.png'
import breatheImg from '../../assets/illustrations/breathe.png'
import groundImg from '../../assets/illustrations/ground.png'
import landingImg from '../../assets/illustrations/landing.png'
import libraryImg from '../../assets/illustrations/library.png'
import myStoryImg from '../../assets/illustrations/my_story.png'
import patternsImg from '../../assets/illustrations/patterns.png'
import preparationImg from '../../assets/illustrations/preparation.png'
import reframeImg from '../../assets/illustrations/reframe.png'
import resetBodyImg from '../../assets/illustrations/reset_body.png'
import timelineImg from '../../assets/illustrations/timeline.png'
import whatIsHappeningImg from '../../assets/illustrations/what_is_happening.png'

export type MicroIllustrationId =
  | 'all'
  | 'brain_dump'
  | 'breathe'
  | 'ground'
  | 'landing'
  | 'library'
  | 'my_story'
  | 'patterns'
  | 'preparation'
  | 'reframe'
  | 'reset_body'
  | 'timeline'
  | 'what_is_happening'

const ILLUSTRATION_SRC: Record<MicroIllustrationId, string> = {
  all: allImg,
  brain_dump: brainDumpImg,
  breathe: breatheImg,
  ground: groundImg,
  landing: landingImg,
  library: libraryImg,
  my_story: myStoryImg,
  patterns: patternsImg,
  preparation: preparationImg,
  reframe: reframeImg,
  reset_body: resetBodyImg,
  timeline: timelineImg,
  what_is_happening: whatIsHappeningImg,
}

type MicroIllustrationProps = {
  id: MicroIllustrationId
  /** Default 160 — within 120–180px spec */
  width?: number
  centered?: boolean
}

export function MicroIllustration({ id, width = 160, centered = false }: MicroIllustrationProps) {
  return (
    <Box
      component="img"
      src={ILLUSTRATION_SRC[id]}
      alt=""
      aria-hidden
      sx={{
        width,
        maxWidth: '100%',
        height: 'auto',
        display: 'block',
        mx: centered ? 'auto' : 0,
      }}
    />
  )
}
