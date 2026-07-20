import type { IncomingMessage, ServerResponse } from 'node:http'
import type { Plugin } from 'vite'
import { loadEnv } from 'vite'
import { generateOneThingFromDump } from './generate.js'
import { generatePrepReflection } from './prep-generate.js'

async function readJsonBody(req: IncomingMessage): Promise<Record<string, unknown>> {
  return new Promise((resolve, reject) => {
    let body = ''
    req.on('data', (chunk: Buffer) => {
      body += chunk.toString()
    })
    req.on('end', () => {
      try {
        resolve(JSON.parse(body) as Record<string, unknown>)
      } catch {
        reject(new Error('Invalid JSON body'))
      }
    })
    req.on('error', reject)
  })
}

function sendJson(res: ServerResponse, status: number, data: unknown) {
  res.statusCode = status
  res.setHeader('Content-Type', 'application/json')
  res.end(JSON.stringify(data))
}

export function geminiDevApiPlugin(): Plugin {
  return {
    name: 'gemini-dev-api',
    configureServer(server) {
      const env = loadEnv(server.config.mode, server.config.root, '')
      const apiKey = env.GEMINI_API_KEY

      server.middlewares.use('/api/gemini', async (req, res) => {
        if (req.method !== 'POST') {
          sendJson(res, 405, { error: 'Method not allowed' })
          return
        }
        if (!apiKey) {
          sendJson(res, 500, { error: 'GEMINI_API_KEY not set in .env.local' })
          return
        }
        try {
          const body = await readJsonBody(req)
          const content = body.content
          if (typeof content !== 'string' || !content.trim()) {
            sendJson(res, 400, { error: 'content is required' })
            return
          }
          const result = await generateOneThingFromDump(content.trim(), apiKey)
          sendJson(res, 200, result)
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Unknown error'
          sendJson(res, 500, { error: message })
        }
      })

      server.middlewares.use('/api/prep', async (req, res) => {
        if (req.method !== 'POST') {
          sendJson(res, 405, { error: 'Method not allowed' })
          return
        }
        if (!apiKey) {
          sendJson(res, 500, { error: 'GEMINI_API_KEY not set in .env.local' })
          return
        }
        try {
          const body = await readJsonBody(req)
          const journalText = body.journalText
          if (typeof journalText !== 'string' || !journalText.trim()) {
            sendJson(res, 400, { error: 'journalText is required' })
            return
          }
          const result = await generatePrepReflection(journalText.trim(), apiKey)
          sendJson(res, 200, result)
        } catch (error) {
          const message = error instanceof Error ? error.message : 'Unknown error'
          sendJson(res, 500, { error: message })
        }
      })
    },
  }
}
