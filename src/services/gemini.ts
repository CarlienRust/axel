import type { AxelAiResponse } from '../types/gemini'

export type { AxelAiResponse } from '../types/gemini'

export async function generateOneThing(content: string): Promise<AxelAiResponse> {
  const response = await fetch('/api/gemini', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ content }),
  })

  const data = (await response.json()) as AxelAiResponse & { error?: string }

  if (!response.ok) {
    throw new Error(data.error ?? "Something went wrong. Try again when you're ready.")
  }

  return data
}
