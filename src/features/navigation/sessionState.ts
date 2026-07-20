import { returnReadyKey } from '../../constants/copy'
import {
  getCheckinByResponseId,
  getLatestDumpIdWithResponse,
  getResponseByDumpId,
} from '../../services/storage'
import { parseAxelAiResponse } from '../../types/gemini'

export type SessionResume = {
  dumpId: string
  oneThing: string
  checkInReady: boolean
  checkInComplete: boolean
}

export function getSessionResume(): SessionResume | null {
  const dumpId = getLatestDumpIdWithResponse()
  if (!dumpId) return null

  const response = getResponseByDumpId(dumpId)
  if (!response) return null

  let oneThing = ''
  try {
    oneThing = parseAxelAiResponse(response.content).oneThing
  } catch {
    oneThing = response.content
  }

  const checkInComplete = Boolean(getCheckinByResponseId(response.id))
  const returnAt = Number(sessionStorage.getItem(returnReadyKey(dumpId)))
  const checkInReady = !checkInComplete && (!returnAt || Date.now() >= returnAt)

  return { dumpId, oneThing, checkInReady, checkInComplete }
}
