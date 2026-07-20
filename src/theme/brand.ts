/** Axel brand tokens — source of truth matches docs/BRAND_GUIDELINES.md */
export const brand = {
  primary: '#4F6F62',
  primaryDark: '#3C554B',
  background: '#F6F3EE',
  surface: '#FFFFFF',
  accent: '#C9A86A',
  success: '#6F9B83',
  warning: '#C98A52',
  error: '#B86452',
  textPrimary: '#23312D',
  textSecondary: '#5F6B67',
  textMuted: '#8A938E',
  border: '#E7E3DC',
  disabled: '#B8C0BC',
  radius: {
    button: 9999,
    card: 20,
    input: 16,
    dialog: 24,
  },
  font: {
    display: '2.5rem', // 40px
    heading: '2rem', // 32px
    section: '1.5rem', // 24px
    body: '1.0625rem', // 17px
    caption: '0.9375rem', // 15px
    button: '1rem', // 16px
  },
  motion: {
    duration: '200ms',
    easing: 'cubic-bezier(0.4, 0, 0.2, 1)',
  },
} as const
