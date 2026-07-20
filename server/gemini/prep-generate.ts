import { toUserFacingGeminiError } from './errors.js'
import { PREP_REFLECTION_PROMPT } from './prep-prompt.js'

const DEFAULT_GEMINI_MODEL = 'gemini-2.0-flash-lite'

export type PrepReflectionResponse = {
  observation: string
  question: string
}

export async function generatePrepReflection(
  journalText: string,
  apiKey: string,
  model = process.env.GEMINI_MODEL ?? DEFAULT_GEMINI_MODEL,
): Promise<PrepReflectionResponse> {
  const url = `https://generativelanguage.googleapis.com/v1beta/models/${model}:generateContent?key=${apiKey}`

  const response = await fetch(url, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      system_instruction: {
        parts: [{ text: PREP_REFLECTION_PROMPT }],
      },
      contents: [
        {
          role: 'user',
          parts: [{ text: journalText }],
        },
      ],
      generation_config: {
        temperature: 0.6,
        response_mime_type: 'application/json',
      },
    }),
  })

  if (!response.ok) {
    const errorText = await response.text()
    throw new Error(toUserFacingGeminiError(response.status, errorText))
  }

  const data = (await response.json()) as {
    candidates?: Array<{ content?: { parts?: Array<{ text?: string }> } }>
  }

  const text = data.candidates?.[0]?.content?.parts?.[0]?.text
  if (!text) throw new Error('Gemini returned an empty response')

  const parsed = JSON.parse(text) as PrepReflectionResponse
  if (!parsed.observation?.trim() || !parsed.question?.trim()) {
    throw new Error('Invalid prep reflection shape')
  }

  return {
    observation: parsed.observation.trim(),
    question: parsed.question.trim(),
  }
}
