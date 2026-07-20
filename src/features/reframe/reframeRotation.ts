import { REFRAMES, type Reframe } from './reframes'

const ROTATION_KEY = 'axel-reframe-index'

export function getNextReframe(): Reframe {
  const index = Number(localStorage.getItem(ROTATION_KEY) ?? 0) % REFRAMES.length
  localStorage.setItem(ROTATION_KEY, String(index + 1))
  return REFRAMES[index]!
}

/** For dev preview — current reframe without advancing rotation */
export function peekReframe(): Reframe {
  const index = Number(localStorage.getItem(ROTATION_KEY) ?? 0) % REFRAMES.length
  return REFRAMES[index]!
}
