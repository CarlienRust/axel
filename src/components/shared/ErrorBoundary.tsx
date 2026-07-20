import { Component, type ErrorInfo, type ReactNode } from 'react'
import { Box, Typography } from '@mui/material'
import { CalmButton } from './CalmButton'
import { COPY } from '../../constants/copy'

type ErrorBoundaryProps = {
  children: ReactNode
}

type ErrorBoundaryState = {
  hasError: boolean
}

export class ErrorBoundary extends Component<ErrorBoundaryProps, ErrorBoundaryState> {
  state: ErrorBoundaryState = { hasError: false }

  static getDerivedStateFromError(): ErrorBoundaryState {
    return { hasError: true }
  }

  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('Axel error boundary:', error, info.componentStack)
  }

  handleRetry = () => {
    this.setState({ hasError: false })
    window.location.href = '/'
  }

  render() {
    if (this.state.hasError) {
      return (
        <Box
          sx={{
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            px: 3,
            gap: 3,
            textAlign: 'center',
          }}
        >
          <Typography variant="h2" sx={{ fontSize: '1.25rem', fontWeight: 600 }}>
            {COPY.errorBoundaryTitle}
          </Typography>
          <Typography variant="body1" color="text.secondary" sx={{ maxWidth: 320 }}>
            {COPY.errorBoundaryBody}
          </Typography>
          <CalmButton variant="contained" onClick={this.handleRetry}>
            {COPY.errorBoundaryRetry}
          </CalmButton>
        </Box>
      )
    }

    return this.props.children
  }
}
