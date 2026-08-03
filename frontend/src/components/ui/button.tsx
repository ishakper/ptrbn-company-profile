import * as React from 'react'
import { Slot } from '@radix-ui/react-slot'
import { cva, type VariantProps } from 'class-variance-authority'
import { cn } from '@/lib/utils'

const buttonVariants = cva(
  'inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-semibold transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0',
  {
    variants: {
      variant: {
        default:
          'bg-navy-800 text-white shadow hover:bg-navy-700 focus-visible:ring-navy-800',
        primary:
          'bg-navy-800 text-white shadow hover:bg-navy-700 focus-visible:ring-navy-800',
        secondary:
          'bg-gold-500 text-white shadow hover:bg-gold-600 focus-visible:ring-gold-500',
        outline:
          'border-2 border-navy-800 bg-transparent text-navy-800 hover:bg-navy-800 hover:text-white focus-visible:ring-navy-800',
        ghost:
          'bg-transparent text-navy-800 hover:bg-navy-50 focus-visible:ring-navy-800',
        destructive:
          'bg-red-600 text-white shadow hover:bg-red-700 focus-visible:ring-red-600',
        link: 'text-navy-800 underline-offset-4 hover:underline focus-visible:ring-navy-800',
        white:
          'bg-white text-navy-800 shadow hover:bg-surface-100 focus-visible:ring-white',
      },
      size: {
        sm: 'h-8 px-3 text-xs',
        md: 'h-10 px-5 py-2',
        lg: 'h-12 px-8 text-base',
        xl: 'h-14 px-10 text-lg',
        icon: 'h-10 w-10',
      },
      rounded: {
        default: 'rounded-md',
        full: 'rounded-full',
        lg: 'rounded-lg',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'md',
      rounded: 'default',
    },
  },
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
  loading?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, rounded, asChild = false, loading = false, children, disabled, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button'
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, rounded, className }))}
        ref={ref}
        disabled={disabled ?? loading}
        aria-disabled={disabled ?? loading}
        {...props}
      >
        {loading ? (
          <>
            <svg
              className="animate-spin size-4"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            <span>Loading…</span>
          </>
        ) : (
          children
        )}
      </Comp>
    )
  },
)
Button.displayName = 'Button'

export { Button, buttonVariants }
