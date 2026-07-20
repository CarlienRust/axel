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
