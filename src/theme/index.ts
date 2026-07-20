import { createTheme } from '@mui/material/styles'

export const theme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#5b8a8a',
      light: '#7aa3a3',
      dark: '#456969',
      contrastText: '#f8fafc',
    },
    secondary: {
      main: '#94a3b8',
    },
    background: {
      default: '#1e293b',
      paper: '#273549',
    },
    text: {
      primary: '#f1f5f9',
      secondary: '#cbd5e1',
    },
    divider: '#334155',
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontSize: 16,
    h1: { fontSize: '2rem', fontWeight: 600, lineHeight: 1.4 },
    h2: { fontSize: '1.5rem', fontWeight: 600, lineHeight: 1.4 },
    h3: { fontSize: '1.25rem', fontWeight: 500, lineHeight: 1.5 },
    body1: { fontSize: '1rem', lineHeight: 1.6 },
    body2: { fontSize: '0.9375rem', lineHeight: 1.6 },
    button: { textTransform: 'none', fontWeight: 500 },
  },
  shape: {
    borderRadius: 12,
  },
  spacing: 8,
  shadows: [
    'none',
    '0 1px 2px rgba(0,0,0,0.12)',
    '0 1px 3px rgba(0,0,0,0.14)',
    '0 2px 4px rgba(0,0,0,0.14)',
    '0 2px 6px rgba(0,0,0,0.16)',
    '0 3px 8px rgba(0,0,0,0.16)',
    '0 4px 10px rgba(0,0,0,0.18)',
    '0 4px 12px rgba(0,0,0,0.18)',
    '0 5px 14px rgba(0,0,0,0.2)',
    '0 6px 16px rgba(0,0,0,0.2)',
    '0 6px 18px rgba(0,0,0,0.22)',
    '0 7px 20px rgba(0,0,0,0.22)',
    '0 8px 22px rgba(0,0,0,0.24)',
    '0 8px 24px rgba(0,0,0,0.24)',
    '0 9px 26px rgba(0,0,0,0.26)',
    '0 10px 28px rgba(0,0,0,0.26)',
    '0 10px 30px rgba(0,0,0,0.28)',
    '0 11px 32px rgba(0,0,0,0.28)',
    '0 12px 34px rgba(0,0,0,0.3)',
    '0 12px 36px rgba(0,0,0,0.3)',
    '0 13px 38px rgba(0,0,0,0.32)',
    '0 14px 40px rgba(0,0,0,0.32)',
    '0 14px 42px rgba(0,0,0,0.34)',
    '0 15px 44px rgba(0,0,0,0.34)',
    '0 16px 46px rgba(0,0,0,0.36)',
  ],
  components: {
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: 12,
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      defaultProps: {
        variant: 'outlined',
      },
      styleOverrides: {
        root: {
          '& .MuiOutlinedInput-root': {
            borderRadius: 12,
          },
        },
      },
    },
    MuiPaper: {
      defaultProps: {
        elevation: 0,
      },
      styleOverrides: {
        root: {
          backgroundImage: 'none',
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
  },
})
