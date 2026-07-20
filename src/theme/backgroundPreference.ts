/** Background splash variants — see docs/background_moodboard.png */
export type BackgroundVariant =
  | 'abstract-landscape'
  | 'paper-cut'
  | 'topographic'
  | 'noise-clarity'
  | 'sound-wave'

export const BACKGROUND_VARIANTS: { id: BackgroundVariant; label: string }[] = [
  { id: 'abstract-landscape', label: 'Abstract landscape' },
  { id: 'paper-cut', label: 'Paper cut layers' },
  { id: 'topographic', label: 'Topographic calm' },
  { id: 'noise-clarity', label: 'Noise to clarity' },
  { id: 'sound-wave', label: 'Sound wave dissolving' },
]

const STORAGE_KEY = 'axel-background'

export function getBackgroundVariant(): BackgroundVariant {
  try {
    const stored = localStorage.getItem(STORAGE_KEY)
    if (stored && BACKGROUND_VARIANTS.some((v) => v.id === stored)) {
      return stored as BackgroundVariant
    }
  } catch {
    // ignore
  }
  return 'abstract-landscape'
}

export function setBackgroundVariant(variant: BackgroundVariant): void {
  localStorage.setItem(STORAGE_KEY, variant)
}
