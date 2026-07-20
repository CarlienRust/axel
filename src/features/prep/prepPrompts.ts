import type { PrepReflection } from '../../services/prep'

export type PrepPrompt = {
  id: string
  label: string
  placeholder: string
}

export const prepPrompts: PrepPrompt[] = [
  {
    id: 'when_noticed',
    label: 'When did you first notice these patterns?',
    placeholder: 'As far back as you can remember...',
  },
  {
    id: 'contexts',
    label: 'In which contexts do they show up most?',
    placeholder: 'Work, home, relationships, mornings, transitions...',
  },
  {
    id: 'impact',
    label: 'What is the impact on work, relationships, or daily life?',
    placeholder: 'Be honest. There is no wrong answer.',
  },
  {
    id: 'what_helps',
    label: 'What have you tried that helped, even a little?',
    placeholder: 'Tools, people, routines, environments...',
  },
  {
    id: 'want_understood',
    label: 'What do you want a professional to understand about your experience?',
    placeholder: 'In your own words.',
  },
]

export function formatPrepSummary(
  answers: Record<string, string>,
  reflection?: PrepReflection | null,
): string {
  const lines = ['My experience — prepared with Axel', '']

  if (reflection) {
    lines.push('From my journal')
    lines.push(reflection.observation)
    lines.push(reflection.question)
    lines.push('')
  }

  for (const prompt of prepPrompts) {
    const answer = answers[prompt.id]?.trim()
    if (!answer) continue
    lines.push(prompt.label)
    lines.push(answer)
    lines.push('')
  }

  lines.push('---')
  lines.push('This summary was prepared by me. Axel does not diagnose.')

  return lines.join('\n')
}
