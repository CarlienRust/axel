import type { AxelStore } from '../../types/storage'

export type WeekDayActivity = {
  label: string
  count: number
}

export type WeekOverview = {
  brainDumps: number
  reflections: number
  toolsUsed: number
  days: WeekDayActivity[]
  maxDayCount: number
}

const DAY_LABELS = ['M', 'T', 'W', 'T', 'F', 'S', 'S'] as const

function startOfWeek(date: Date): Date {
  const d = new Date(date)
  const day = d.getDay()
  const diff = day === 0 ? -6 : 1 - day
  d.setDate(d.getDate() + diff)
  d.setHours(0, 0, 0, 0)
  return d
}

function isSameDay(a: Date, b: Date): boolean {
  return (
    a.getFullYear() === b.getFullYear() &&
    a.getMonth() === b.getMonth() &&
    a.getDate() === b.getDate()
  )
}

function inCurrentWeek(iso: string, weekStart: Date): boolean {
  const d = new Date(iso)
  const weekEnd = new Date(weekStart)
  weekEnd.setDate(weekEnd.getDate() + 7)
  return d >= weekStart && d < weekEnd
}

export function buildWeekOverview(store: AxelStore): WeekOverview {
  const weekStart = startOfWeek(new Date())

  const brainDumps = store.dumps.filter((d) => inCurrentWeek(d.created_at, weekStart)).length
  const reflections = store.checkins.filter((c) => inCurrentWeek(c.created_at, weekStart)).length
  const toolsUsed = reflections + store.prep_notes.filter((p) => inCurrentWeek(p.created_at, weekStart)).length

  const days: WeekDayActivity[] = DAY_LABELS.map((label, i) => {
    const dayStart = new Date(weekStart)
    dayStart.setDate(dayStart.getDate() + i)
    const dayEnd = new Date(dayStart)
    dayEnd.setDate(dayEnd.getDate() + 1)

    const count =
      store.dumps.filter((d) => {
        const t = new Date(d.created_at)
        return t >= dayStart && t < dayEnd
      }).length +
      store.checkins.filter((c) => {
        const t = new Date(c.created_at)
        return t >= dayStart && t < dayEnd
      }).length

    return { label, count }
  })

  const maxDayCount = Math.max(1, ...days.map((d) => d.count))

  return { brainDumps, reflections, toolsUsed, days, maxDayCount }
}

export function isTodayInWeek(weekStart: Date, dayIndex: number): boolean {
  const day = new Date(weekStart)
  day.setDate(day.getDate() + dayIndex)
  return isSameDay(day, new Date())
}

export function getWeekStart(): Date {
  return startOfWeek(new Date())
}
