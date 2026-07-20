import { toUserFacingGeminiError } from './errors.js'
import { AXEL_SYSTEM_PROMPT } from './prompt.js'
import { parseAxelAiResponse, type AxelAiResponse } from './types.js'

const DEFAULT_GEMINI_MODEL = 'gemini-2.0-flash-lite'

export async function generateOneThingFromDump(
  dumpContent: string,
  apiKey: string,
  model = process.env.GEMINI_MODEL ?? DEFAULT_GEMINI_MODEL,
): Promise<AxelAiResponse> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: AXEL_SYSTEM_PROMPT }],
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: dumpContent }],
        },
      ],
      generation_config: {
        temperature: 0.7,
        response_mime_type: 'application/json',
      },
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(toUserFacingGeminiError(response.status, errorText))
  }

  const data = (await response.json()) as {
    candidates?: Array<{
      content?: { parts?: Array<{ text?: string }> }
    }>
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) {
    throw new Error('Gemini returned an empty response')
  }

  return parseAxelAiResponse(text)
}
