export type AxelAiResponse = {
  oneThing: string
  heldItems: string[]
  crisisFlag: boolean
}

type LegacyAxelAiResponse = {
  acknowledgment?: string
  oneThing: string
  reframe?: string | null
  heldItems?: string[]
  crisisFlag?: boolean
}

export function parseAxelAiResponse(raw: string): AxelAiResponse {
  const parsed = JSON.parse(raw) as LegacyAxelAiResponse
  if (!parsed.oneThing?.trim()) {
    throw new Error('Invalid Axel response shape')
  }
  return {
    oneThing: parsed.oneThing.trim(),
    heldItems: Array.isArray(parsed.heldItems)
      ? parsed.heldItems.filter((item) => typeof item === 'string' && item.trim())
      : [],
    crisisFlag: Boolean(parsed.crisisFlag),
  }
}

export function serializeAxelAiResponse(response: AxelAiResponse): string {
  return JSON.stringify(response)
}

/** Fallback when AI does not return heldItems — split dump into simple lines */
export function heldItemsFromDump(dumpContent: string, ai: AxelAiResponse): string[] {
  if (ai.heldItems.length > 0) return ai.heldItems
  return dumpContent
    .split(/\n+/)
    .flatMap((line) => line.split(/(?<=[.!?])\s+/))
    .map((s) => s.trim())
    .filter((s) => s.length > 0)
}
