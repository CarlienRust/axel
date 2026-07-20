export type PrepReflection = {
  observation: string
  question: string
}

export async function generatePrepReflection(journalText: string): Promise<PrepReflection> {
  const response = await fetch('/api/prep', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ journalText }),
  })

  const data = (await response.json()) as PrepReflection & { error?: string }

  if (!response.ok) {
    throw new Error(data.error ?? "Something went wrong. Try again when you're ready.")
  }

  return data
}
