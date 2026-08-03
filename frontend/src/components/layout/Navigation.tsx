import { NavLink } from 'react-router-dom'
import { cn } from '@/lib/utils'

export interface NavItem {
  label: string
  href: string
  external?: boolean
}

// oxlint-disable-next-line react/only-export-components -- navItems is intentionally co-located
export const navItems: NavItem[] = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Services', href: '/services' },
  { label: 'Fleet', href: '/fleet' },
  { label: 'Rute', href: '/routes' },
  { label: 'Projects', href: '/projects' },
  { label: 'News', href: '/news' },
  { label: 'Career', href: '/career' },
  { label: 'Contact', href: '/contact' },
]

interface NavigationProps {
  orientation?: 'horizontal' | 'vertical'
  className?: string
  onLinkClick?: () => void
}

export function Navigation({ orientation = 'horizontal', className, onLinkClick }: NavigationProps) {
  return (
    <nav
      role="navigation"
      aria-label="Main navigation"
      className={cn(
        orientation === 'horizontal' ? 'flex items-center gap-1' : 'flex flex-col gap-1',
        className,
      )}
    >
      {navItems.map((item) => (
        <NavLink
          key={item.href}
          to={item.href}
          end={item.href === '/'}
          onClick={onLinkClick}
          className={({ isActive }) =>
            cn(
              'relative px-3 py-2 text-sm font-medium rounded-md transition-colors duration-150',
              'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-navy-800 dark:focus-visible:ring-white',
              'hover:text-navy-950 dark:hover:text-white hover:bg-navy-50/50 dark:hover:bg-white/10',
              isActive
                ? 'text-gold-600 dark:text-gold-400 after:absolute after:bottom-0 after:left-3 after:right-3 after:h-0.5 after:bg-gold-500 after:rounded-full'
                : 'text-navy-800 dark:text-white/90',
              orientation === 'vertical' && 'w-full justify-start px-4 py-3 text-base',
            )
          }
          {...(item.external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
        >
          {item.label}
        </NavLink>
      ))}
    </nav>
  )
}
