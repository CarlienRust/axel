export type CheckinAnswer = 'yes' | 'not_yet' | 'not_sure'

export type Dump = {
  id: string
  user_id: string
  content: string
  created_at: string
}

export type Response = {
  id: string
  dump_id: string
  user_id: string
  content: string
  created_at: string
}

export type Checkin = {
  id: string
  response_id: string
  user_id: string
  answer: CheckinAnswer
  created_at: string
}

export type PrepNote = {
  id: string
  user_id: string
  content: Record<string, string>
  created_at: string
}

export type AxelStore = {
  dumps: Dump[]
  responses: Response[]
  checkins: Checkin[]
  prep_notes: PrepNote[]
}
