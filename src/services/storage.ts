import { PROTOTYPE_USER_ID } from '../constants/user'
import type {
  AxelStore,
  Checkin,
  CheckinAnswer,
  Dump,
  PrepNote,
  Response,
} from '../types/storage'

const STORE_KEY = 'axel-data'

const emptyStore = (): AxelStore => ({
  dumps: [],
  responses: [],
  checkins: [],
  prep_notes: [],
})

function readStore(): AxelStore {
  try {
    const raw = localStorage.getItem(STORE_KEY)
    if (!raw) return emptyStore()
    return JSON.parse(raw) as AxelStore
  } catch {
    return emptyStore()
  }
}

function writeStore(store: AxelStore): void {
  localStorage.setItem(STORE_KEY, JSON.stringify(store))
}

function createId(): string {
  return crypto.randomUUID()
}

function now(): string {
  return new Date().toISOString()
}

export function createDump(content: string): Dump {
  const store = readStore()
  const dump: Dump = {
    id: createId(),
    user_id: PROTOTYPE_USER_ID,
    content,
    created_at: now(),
  }
  store.dumps.push(dump)
  writeStore(store)
  return dump
}

export function createResponse(dumpId: string, content: string): Response {
  const store = readStore()
  const response: Response = {
    id: createId(),
    dump_id: dumpId,
    user_id: PROTOTYPE_USER_ID,
    content,
    created_at: now(),
  }
  store.responses.push(response)
  writeStore(store)
  return response
}

export function createCheckin(responseId: string, answer: CheckinAnswer): Checkin {
  const store = readStore()
  const checkin: Checkin = {
    id: createId(),
    response_id: responseId,
    user_id: PROTOTYPE_USER_ID,
    answer,
    created_at: now(),
  }
  store.checkins.push(checkin)
  writeStore(store)
  return checkin
}

export function getDump(id: string): Dump | undefined {
  return readStore().dumps.find((d) => d.id === id)
}

export function getResponseByDumpId(dumpId: string): Response | undefined {
  return readStore().responses.find((r) => r.dump_id === dumpId)
}

export function getRecentDumps(limit = 10): Dump[] {
  return readStore()
    .dumps.sort(
      (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
    )
    .slice(0, limit)
}

export function savePrepNote(content: Record<string, string>): PrepNote {
  const store = readStore()
  const note: PrepNote = {
    id: createId(),
    user_id: PROTOTYPE_USER_ID,
    content,
    created_at: now(),
  }
  store.prep_notes.push(note)
  writeStore(store)
  return note
}

export function getPrepNotes(): PrepNote[] {
  return readStore().prep_notes.sort(
    (a, b) => new Date(b.created_at).getTime() - new Date(a.created_at).getTime(),
  )
}

/** Round-trip test helper for Day 1 verification */
export function testStorageRoundTrip(): boolean {
  const testContent = `__axel_test_${Date.now()}`
  const dump = createDump(testContent)
  const read = getDump(dump.id)
  return read?.content === testContent
}
