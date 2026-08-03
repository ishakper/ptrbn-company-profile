import * as React from 'react'
import { cn } from '@/lib/utils'

// ── Container ──────────────────────────────────────────────
interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

function Container({ className, size = 'xl', children, ...props }: ContainerProps) {
  const maxWidths = {
    sm: 'max-w-3xl',
    md: 'max-w-5xl',
    lg: 'max-w-6xl',
    xl: 'max-w-7xl',
    full: 'max-w-full',
  }
  return (
    <div
      className={cn('mx-auto w-full px-4 sm:px-6 lg:px-8', maxWidths[size], className)}
      {...props}
    >
      {children}
    </div>
  )
}

// ── Section ────────────────────────────────────────────────
interface SectionProps extends React.HTMLAttributes<HTMLElement> {
  as?: 'section' | 'div' | 'article'
  spacing?: 'none' | 'sm' | 'md' | 'lg' | 'xl'
}

function Section({ className, as: Tag = 'section', spacing = 'lg', children, ...props }: SectionProps) {
  const spacings = {
    none: '',
    sm: 'py-8',
    md: 'py-12',
    lg: 'py-16 md:py-20',
    xl: 'py-20 md:py-28',
  }
  return (
    <Tag className={cn(spacings[spacing], className)} {...props}>
      {children}
    </Tag>
  )
}

// ── Heading ────────────────────────────────────────────────
interface HeadingProps extends React.HTMLAttributes<HTMLHeadingElement> {
  level?: 1 | 2 | 3 | 4 | 5 | 6
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | '2xl' | '3xl'
  gradient?: boolean
}

function Heading({ level = 2, size, gradient = false, className, children, ...props }: HeadingProps) {
  const Tag = `h${level}` as 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  const defaultSizes: Record<number, string> = {
    1: 'text-4xl md:text-5xl lg:text-6xl',
    2: 'text-3xl md:text-4xl',
    3: 'text-2xl md:text-3xl',
    4: 'text-xl md:text-2xl',
    5: 'text-lg md:text-xl',
    6: 'text-base md:text-lg',
  }
  const manualSizes: Record<string, string> = {
    xs: 'text-base',
    sm: 'text-lg',
    md: 'text-xl md:text-2xl',
    lg: 'text-2xl md:text-3xl',
    xl: 'text-3xl md:text-4xl',
    '2xl': 'text-4xl md:text-5xl',
    '3xl': 'text-5xl md:text-6xl lg:text-7xl',
  }
  return (
    <Tag
      className={cn(
        'font-display font-bold leading-tight tracking-tight',
        size ? manualSizes[size] : defaultSizes[level],
        gradient && 'bg-gradient-to-br from-navy-800 via-navy-600 to-gold-500 bg-clip-text text-transparent',
        className,
      )}
      {...props}
    >
      {children}
    </Tag>
  )
}

// ── Separator ──────────────────────────────────────────────
interface SeparatorProps extends React.HTMLAttributes<HTMLHRElement> {
  orientation?: 'horizontal' | 'vertical'
}

function Separator({ orientation = 'horizontal', className, ...props }: SeparatorProps) {
  return (
    <hr
      role="separator"
      aria-orientation={orientation}
      className={cn(
        'shrink-0 border-border',
        orientation === 'horizontal' ? 'h-px w-full border-t' : 'h-full w-px border-l',
        className,
      )}
      {...props}
    />
  )
}

// ── SectionLabel ───────────────────────────────────────────
function SectionLabel({ children, className }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={cn(
        'inline-flex items-center gap-2 rounded-full bg-gold-100 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-gold-700',
        'dark:bg-navy-800 dark:text-gold-400',
        className,
      )}
    >
      {children}
    </span>
  )
}

export { Container, Section, Heading, Separator, SectionLabel }
