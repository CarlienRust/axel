/** Background variants — plain app beige or plain app green with clarity wave */
export type BackgroundVariant = 'beige' | 'green'

export const BACKGROUND_VARIANTS: { id: BackgroundVariant; label: string }[] = [
  { id: 'beige', label: 'Warm Linen' },
  { id: 'green', label: 'Deep Forest' },
]

const STORAGE_KEY = 'axel-background'

const LEGACY_MAP: Record<string, BackgroundVariant> = {
  'abstract-landscape': 'beige',
  'paper-cut': 'beige',
  topographic: 'beige',
  'noise-clarity': 'beige',
  'sound-wave': 'beige',
  'full-tangle': 'beige',
  'mid-tangle': 'beige',
  'near-resolved': 'beige',
  'almost-clear': 'beige',
  resolved: 'green',
}

export function getBackgroundVariant(): BackgroundVariant {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored) {
      if (BACKGROUND_VARIANTS.some((v) => v.id === stored)) {
        return stored as BackgroundVariant
      }
      if (stored in LEGACY_MAP) {
        return LEGACY_MAP[stored]!
      }
    }
  } catch {
    // ignore
  }
  return 'beige'
}

export function setBackgroundVariant(variant: BackgroundVariant): void {
  localStorage.setItem(STORAGE_KEY, variant)
}
