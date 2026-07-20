export function toUserFacingGeminiError(status: number, rawBody: string): string {
  if (status === 429) {
    return 'Axel is temporarily unavailable — API quota reached. Try again in a minute, or check your Gemini API key in Vercel.'
  }
  if (status === 401 || status === 403) {
    return 'Axel could not connect — check that GEMINI_API_KEY is set correctly in Vercel.'
  }
  if (status === 404) {
    return 'Axel could not connect — the configured Gemini model may not be available. Try setting GEMINI_MODEL in Vercel.'
  }

  try {
    const parsed = JSON.parse(rawBody) as { error?: { message?: string } }
    if (parsed.error?.message) {
      return `Axel could not respond: ${parsed.error.message}`
    }
  } catch {
    // fall through
  }

  return "Something went wrong on Axel's side. Try again when you're ready."
}
