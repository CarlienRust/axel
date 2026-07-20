import type { VercelRequest, VercelResponse } from '@vercel/node'
import { generatePrepReflection } from '../server/gemini/prep-generate.js'

export default async function handler(req: VercelRequest, res: VercelResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const apiKey = process.env.GEMINI_API_KEY
  if (!apiKey) {
    return res.status(500).json({ error: 'Gemini API key not configured' })
  }

  const journalText = req.body?.journalText
  if (typeof journalText !== 'string' || !journalText.trim()) {
    return res.status(400).json({ error: 'journalText is required' })
  }

  try {
    const result = await generatePrepReflection(journalText.trim(), apiKey)
    return res.status(200).json(result)
  } catch (error) {
    const message = error instanceof Error ? error.message : 'Unknown error'
    return res.status(500).json({ error: message })
  }
}
