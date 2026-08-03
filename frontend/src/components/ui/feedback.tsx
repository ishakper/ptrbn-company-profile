import * as React from 'react'
import { cn } from '@/lib/utils'
import { AlertCircle, CheckCircle2, Info, AlertTriangle } from 'lucide-react'

// ── Loading Spinner ────────────────────────────────────────
interface LoadingProps {
  size?: 'sm' | 'md' | 'lg'
  className?: string
  label?: string
}

function Loading({ size = 'md', className, label = 'Loading…' }: LoadingProps) {
  const sizes = { sm: 'size-4', md: 'size-8', lg: 'size-12' }
  return (
    <div role="status" className={cn('flex flex-col items-center gap-3', className)}>
      <svg
        className={cn('animate-spin text-navy-800 dark:text-gold-500', sizes[size])}
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        aria-hidden="true"
      >
        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
      </svg>
      <span className="sr-only">{label}</span>
    </div>
  )
}

// ── Empty State ────────────────────────────────────────────
interface EmptyStateProps {
  title: string
  description?: string
  icon?: React.ReactNode
  action?: React.ReactNode
  className?: string
}

function EmptyState({ title, description, icon, action, className }: EmptyStateProps) {
  return (
    <div
      className={cn('flex flex-col items-center justify-center py-16 text-center px-4', className)}
      role="status"
      aria-label={title}
    >
      {icon && (
        <div className="mb-4 rounded-full bg-surface-100 p-6 dark:bg-navy-800">{icon}</div>
      )}
      <h3 className="font-display font-semibold text-xl text-navy-800 dark:text-surface-100 mb-2">{title}</h3>
      {description && (
        <p className="text-muted-foreground text-sm max-w-sm">{description}</p>
      )}
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}

// ── Error State ────────────────────────────────────────────
interface ErrorStateProps {
  title?: string
  description?: string
  variant?: 'error' | 'warning' | 'info' | 'success'
  action?: React.ReactNode
  className?: string
}

function ErrorState({
  title = 'Something went wrong',
  description = 'Please try again or contact support.',
  variant = 'error',
  action,
  className,
}: ErrorStateProps) {
  const icons = {
    error: <AlertCircle className="size-10 text-red-500" aria-hidden="true" />,
    warning: <AlertTriangle className="size-10 text-amber-500" aria-hidden="true" />,
    info: <Info className="size-10 text-blue-500" aria-hidden="true" />,
    success: <CheckCircle2 className="size-10 text-emerald-500" aria-hidden="true" />,
  }
  const backgrounds = {
    error: 'bg-red-50 dark:bg-red-950/20',
    warning: 'bg-amber-50 dark:bg-amber-950/20',
    info: 'bg-blue-50 dark:bg-blue-950/20',
    success: 'bg-emerald-50 dark:bg-emerald-950/20',
  }
  return (
    <div
      className={cn('flex flex-col items-center justify-center py-16 text-center px-4 rounded-xl', backgrounds[variant], className)}
      role="alert"
      aria-live="polite"
    >
      <div className="mb-4">{icons[variant]}</div>
      <h3 className="font-display font-semibold text-xl text-navy-800 dark:text-surface-100 mb-2">{title}</h3>
      <p className="text-muted-foreground text-sm max-w-sm">{description}</p>
      {action && <div className="mt-6">{action}</div>}
    </div>
  )
}

// ── Toast ──────────────────────────────────────────────────
interface ToastProps {
  message: string
  variant?: 'default' | 'success' | 'error' | 'warning'
  className?: string
}

function Toast({ message, variant = 'default', className }: ToastProps) {
  const styles = {
    default: 'bg-navy-800 text-white',
    success: 'bg-emerald-600 text-white',
    error: 'bg-red-600 text-white',
    warning: 'bg-amber-500 text-white',
  }
  return (
    <div
      role="alert"
      aria-live="polite"
      className={cn(
        'fixed bottom-4 right-4 z-50 flex items-center gap-3 rounded-xl px-4 py-3 shadow-elevated text-sm font-medium',
        styles[variant],
        className,
      )}
    >
      {message}
    </div>
  )
}

// ── Breadcrumb ─────────────────────────────────────────────
interface BreadcrumbItem {
  label: string
  href?: string
}

interface BreadcrumbProps {
  items: BreadcrumbItem[]
  className?: string
}

function Breadcrumb({ items, className }: BreadcrumbProps) {
  return (
    <nav aria-label="Breadcrumb" className={cn('flex items-center gap-1 text-sm text-muted-foreground', className)}>
      <ol className="flex items-center gap-1 list-none">
        {items.map((item, i) => (
          <li key={i} className="flex items-center gap-1">
            {i > 0 && <span aria-hidden="true" className="text-border">/</span>}
            {item.href && i < items.length - 1 ? (
              <a href={item.href} className="hover:text-navy-800 transition-colors focus-visible:outline-none focus-visible:ring-2 rounded">
                {item.label}
              </a>
            ) : (
              <span aria-current={i === items.length - 1 ? 'page' : undefined} className={i === items.length - 1 ? 'font-medium text-navy-800 dark:text-surface-100' : ''}>
                {item.label}
              </span>
            )}
          </li>
        ))}
      </ol>
    </nav>
  )
}

// ── Pagination ─────────────────────────────────────────────
interface PaginationProps {
  currentPage: number
  totalPages: number
  onPageChange: (page: number) => void
  className?: string
}

function Pagination({ currentPage, totalPages, onPageChange, className }: PaginationProps) {
  const pages = Array.from({ length: totalPages }, (_, i) => i + 1)
  return (
    <nav aria-label="Pagination" className={cn('flex items-center justify-center gap-1', className)}>
      <button
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage <= 1}
        aria-label="Previous page"
        className="px-3 py-2 rounded-md text-sm font-medium disabled:opacity-40 hover:bg-surface-100 transition-colors focus-visible:outline-none focus-visible:ring-2"
      >
        ‹
      </button>
      {pages.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          aria-label={`Page ${String(page)}`}
          aria-current={currentPage === page ? 'page' : undefined}
          className={cn(
            'min-w-[2.25rem] h-9 px-3 rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2',
            currentPage === page
              ? 'bg-navy-800 text-white'
              : 'hover:bg-surface-100 text-navy-700',
          )}
        >
          {page}
        </button>
      ))}
      <button
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage >= totalPages}
        aria-label="Next page"
        className="px-3 py-2 rounded-md text-sm font-medium disabled:opacity-40 hover:bg-surface-100 transition-colors focus-visible:outline-none focus-visible:ring-2"
      >
        ›
      </button>
    </nav>
  )
}

export { Loading, EmptyState, ErrorState, Toast, Breadcrumb, Pagination }
