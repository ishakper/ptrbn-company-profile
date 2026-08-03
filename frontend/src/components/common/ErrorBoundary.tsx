import { Component, type ErrorInfo, type ReactNode } from 'react'
import { AlertCircle, RefreshCw } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Props {
  children: ReactNode
  fallback?: ReactNode
}

interface State {
  hasError: boolean
  error: Error | null
}

export class ErrorBoundary extends Component<Props, State> {
  constructor(props: Props) {
    super(props)
    this.state = { hasError: false, error: null }
  }

  static getDerivedStateFromError(error: Error): State {
    return { hasError: true, error }
  }

  override componentDidCatch(error: Error, info: ErrorInfo) {
    // In production, send to error monitoring (e.g., Sentry)
    console.error('[ErrorBoundary]', error, info)
  }

  handleReset = () => {
    this.setState({ hasError: false, error: null })
  }

  override render() {
    if (this.state.hasError) {
      if (this.props.fallback) return this.props.fallback

      return (
        <div
          className="flex min-h-[400px] flex-col items-center justify-center gap-6 rounded-xl bg-red-50 p-8 text-center dark:bg-red-950/20"
          role="alert"
          aria-live="assertive"
        >
          <div className="rounded-full bg-red-100 p-4 dark:bg-red-900/40">
            <AlertCircle className="size-10 text-red-600" aria-hidden="true" />
          </div>
          <div>
            <h2 className="font-display font-bold text-2xl text-navy-800 dark:text-surface-100 mb-2">
              Something went wrong
            </h2>
            <p className="text-muted-foreground text-sm max-w-md">
              {this.state.error?.message ?? 'An unexpected error occurred. Please try refreshing the page.'}
            </p>
          </div>
          <div className="flex gap-3">
            <Button onClick={this.handleReset} variant="outline" size="md">
              <RefreshCw className="size-4" aria-hidden="true" />
              Try Again
            </Button>
            <Button onClick={() => window.location.reload()} variant="primary" size="md">
              Reload Page
            </Button>
          </div>
        </div>
      )
    }

    return this.props.children
  }
}
