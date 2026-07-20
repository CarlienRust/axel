import type { Dump, Response } from '../../types/storage'
import { parseAxelAiResponse } from '../../types/gemini'

export type JournalEntry = {
  dumpId: string
  created_at: string
  dateLabel: string
  dumpPreview: string
  oneThing: string
}

function formatJournalDate(iso: string): string {
  return new Intl.DateTimeFormat('en-ZA', {
    weekday: 'short',
    day: 'numeric',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  }).format(new Date(iso))
}

export function buildJournalEntries(dumps: Dump[], responses: Response[]): JournalEntry[] {
  const responseByDump = new Map(responses.map((r) => [r.dump_id, r]))

  return dumps
    .filter((d) => responseByDump.has(d.id))
    .sort((a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime())
    .map((dump) => {
      const response = responseByDump.get(dump.id)!
      let oneThing = ''
      try {
        oneThing = parseAxelAiResponse(response.content).oneThing
      } catch {
        oneThing = response.content
      }
      const preview =
        dump.content.length > 120 ? `${dump.content.slice(0, 120).trim()}…` : dump.content
      return {
        dumpId: dump.id,
        created_at: dump.created_at,
        dateLabel: formatJournalDate(dump.created_at),
        dumpPreview: preview,
        oneThing,
      }
    })
}

export function formatJournalForPrep(entries: JournalEntry[]): string {
  if (entries.length === 0) return ''
  return entries
    .slice(0, 20)
    .map(
      (e, i) =>
        `Entry ${i + 1} (${e.dateLabel}):\nNoise: ${e.dumpPreview}\nAxel's one thing: ${e.oneThing}`,
    )
    .join('\n\n')
}
