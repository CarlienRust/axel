import type { CheckinAnswer } from '../types/storage'
import { COPY } from '../constants/copy'

const CHECKIN_ACK: Record<CheckinAnswer, string> = {
  yes: COPY.checkinAckYes,
  a_little: COPY.checkinAckALittle,
  not_yet: COPY.checkinAckNotYet,
}

export function getCheckinAck(answer: CheckinAnswer): string {
  return CHECKIN_ACK[answer]
}

export const CHECKIN_ACK_DELAY_MS = 2000
