import type { MicroIllustrationId } from '../../components/brand/MicroIllustration'
import { COPY } from '../../constants/copy'
import type { PrepPrompt } from './prepPrompts'
import { prepPrompts } from './prepPrompts'

export type PrepSectionId = 'my-story' | 'patterns' | 'timeline'

export const prepSectionIllustration: Record<PrepSectionId, MicroIllustrationId> = {
  'my-story': 'my_story',
  patterns: 'patterns',
  timeline: 'timeline',
}

export type PrepSection = {
  id: PrepSectionId
  title: string
  description: string
  promptIds: string[]
  showReflect?: boolean
}

export const prepSections: PrepSection[] = [
  {
    id: 'my-story',
    title: COPY.prepMyStory,
    description: COPY.prepMyStoryDesc,
    promptIds: ['when_noticed', 'impact', 'want_understood'],
  },
  {
    id: 'patterns',
    title: COPY.prepPatterns,
    description: COPY.prepPatternsDesc,
    promptIds: ['contexts', 'what_helps'],
    showReflect: true,
  },
  {
    id: 'timeline',
    title: COPY.prepTimeline,
    description: COPY.prepTimelineDesc,
    promptIds: ['timeline_note'],
  },
]

export function getPrepSection(id: string): PrepSection | undefined {
  return prepSections.find((s) => s.id === id)
}

export function getPrepPrompt(id: string): PrepPrompt | undefined {
  if (id === 'timeline_note') {
    return {
      id: 'timeline_note',
      label: COPY.prepTimelineNote,
      placeholder: COPY.prepTimelineNote,
    }
  }
  return prepPrompts.find((p) => p.id === id)
}
