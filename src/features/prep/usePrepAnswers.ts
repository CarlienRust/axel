import { useState } from 'react'
import { getLatestPrepNote, savePrepNote } from '../../services/storage'
import type { PrepReflection } from '../../services/prep'
import { prepPrompts } from './prepPrompts'

function buildInitialAnswers(): Record<string, string> {
  const latest = getLatestPrepNote()
  if (latest) return { ...latest.content }
  const ids = [...prepPrompts.map((p) => p.id), 'timeline_note']
  return Object.fromEntries(ids.map((id) => [id, '']))
}

export function usePrepAnswers() {
  const [answers, setAnswers] = useState(buildInitialAnswers)
  const [saved, setSaved] = useState(false)

  function updateAnswer(id: string, value: string) {
    setAnswers((prev) => ({ ...prev, [id]: value }))
    setSaved(false)
  }

  function handleSave(reflection?: PrepReflection | null) {
    savePrepNote({
      ...answers,
      _reflection_observation:
        reflection?.observation ?? answers._reflection_observation ?? '',
      _reflection_question: reflection?.question ?? answers._reflection_question ?? '',
    })
    setSaved(true)
  }

  return { answers, updateAnswer, handleSave, saved, setSaved }
}
