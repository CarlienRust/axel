import { createTheme } from '@mui/material/styles'
import { brand } from './brand'

export const theme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: brand.primary,
      dark: brand.primaryDark,
      contrastText: brand.surface,
    },
    secondary: {
      main: brand.accent,
      contrastText: brand.textPrimary,
    },
    background: {
      default: brand.background,
      paper: brand.surface,
    },
    text: {
      primary: brand.textPrimary,
      secondary: brand.textSecondary,
      disabled: brand.textMuted,
    },
    divider: brand.border,
    success: {
      main: brand.success,
    },
    warning: {
      main: brand.warning,
    },
    error: {
      main: brand.error,
    },
  },
  typography: {
    fontFamily: '"Inter", "Helvetica", "Arial", sans-serif',
    fontSize: 17,
    h1: {
      fontSize: brand.font.display,
      fontWeight: 500,
      lineHeight: 1.1,
      color: brand.textPrimary,
    },
    h2: {
      fontSize: brand.font.heading,
      fontWeight: 600,
      lineHeight: 1.25,
      color: brand.textPrimary,
    },
    h3: {
      fontSize: brand.font.section,
      fontWeight: 500,
      lineHeight: 1.4,
      color: brand.textPrimary,
    },
    body1: {
      fontSize: brand.font.body,
      lineHeight: 1.6,
    },
    body2: {
      fontSize: brand.font.caption,
      lineHeight: 1.6,
    },
    caption: {
      fontSize: brand.font.caption,
      lineHeight: 1.5,
      color: brand.textMuted,
    },
    button: {
      fontSize: brand.font.button,
      fontWeight: 600,
      textTransform: 'none',
    },
  },
  shape: {
    borderRadius: brand.radius.button,
  },
  spacing: 8,
  transitions: {
    duration: {
      shortest: 150,
      shorter: 200,
      short: 250,
    },
    easing: {
      easeInOut: brand.motion.easing,
    },
  },
  shadows: [
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
    'none',
  ],
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        body: {
          backgroundColor: brand.background,
          color: brand.textPrimary,
        },
        '@media (prefers-reduced-motion: reduce)': {
          '*': {
            animationDuration: '0.01ms !important',
            animationIterationCount: '1 !important',
            transitionDuration: '0.01ms !important',
          },
        },
      },
    },
    MuiButton: {
      defaultProps: {
        disableElevation: true,
      },
      styleOverrides: {
        root: {
          borderRadius: brand.radius.button,
          padding: '12px 24px',
          minHeight: 48,
          transition: `background-color ${brand.motion.duration} ${brand.motion.easing}`,
        },
        containedPrimary: {
          backgroundColor: brand.primaryDark,
          '&:hover': {
            backgroundColor: brand.primary,
          },
        },
        outlined: {
          borderColor: brand.border,
          color: brand.textPrimary,
          '&:hover': {
            borderColor: brand.primary,
            backgroundColor: 'rgba(79, 111, 98, 0.04)',
          },
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
            borderRadius: brand.radius.input,
            backgroundColor: brand.surface,
            '& fieldset': {
              borderColor: brand.border,
            },
            '&:hover fieldset': {
              borderColor: brand.textMuted,
            },
            '&.Mui-focused fieldset': {
              borderColor: brand.primary,
            },
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
          borderRadius: brand.radius.card,
          border: `1px solid ${brand.border}`,
        },
      },
    },
    MuiCard: {
      defaultProps: {
        elevation: 0,
      },
    },
    MuiDialog: {
      styleOverrides: {
        paper: {
          borderRadius: brand.radius.dialog,
        },
      },
    },
    MuiBottomNavigation: {
      styleOverrides: {
        root: {
          backgroundColor: brand.surface,
          borderTop: `1px solid ${brand.border}`,
        },
      },
    },
    MuiBottomNavigationAction: {
      styleOverrides: {
        root: {
          color: brand.textMuted,
          minWidth: 'auto',
          padding: '6px 8px',
          transition: `color ${brand.motion.duration} ${brand.motion.easing}`,
          '&.Mui-selected': {
            color: brand.primaryDark,
          },
        },
        label: {
          fontSize: '0.6875rem',
          fontWeight: 500,
          '&.Mui-selected': {
            fontSize: '0.6875rem',
          },
        },
      },
    },
    MuiTab: {
      styleOverrides: {
        root: {
          textTransform: 'none',
          fontWeight: 500,
          fontSize: brand.font.caption,
          minHeight: 48,
        },
      },
    },
    MuiTabs: {
      styleOverrides: {
        indicator: {
          backgroundColor: brand.primary,
        },
      },
    },
    MuiAlert: {
      styleOverrides: {
        root: {
          borderRadius: brand.radius.input,
        },
        standardSuccess: {
          backgroundColor: 'rgba(111, 155, 131, 0.12)',
          color: brand.textPrimary,
        },
        standardWarning: {
          backgroundColor: 'rgba(201, 138, 82, 0.12)',
          color: brand.textPrimary,
        },
        standardError: {
          backgroundColor: 'rgba(184, 100, 82, 0.12)',
          color: brand.textPrimary,
        },
        standardInfo: {
          backgroundColor: 'rgba(79, 111, 98, 0.08)',
          color: brand.textPrimary,
        },
      },
    },
    MuiIconButton: {
      styleOverrides: {
        root: {
          borderRadius: '50%',
          transition: `background-color ${brand.motion.duration} ${brand.motion.easing}`,
        },
      },
    },
    MuiCircularProgress: {
      styleOverrides: {
        root: {
          color: brand.primary,
        },
      },
    },
  },
})
