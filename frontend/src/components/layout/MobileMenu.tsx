import { Navigation } from '@/components/layout/Navigation'
import { Button } from '@/components/ui/button'
import { Drawer, DrawerContent, DrawerTrigger } from '@/components/ui/drawer'
import { Link } from 'react-router-dom'
import { Phone } from 'lucide-react'

interface MobileMenuProps {
  isOpen: boolean
  onClose: () => void
  trigger: React.ReactNode
}

export function MobileMenu({ isOpen, onClose, trigger }: MobileMenuProps) {
  return (
    <Drawer open={isOpen} onOpenChange={(open) => { if (!open) onClose() }}>
      <DrawerTrigger asChild>{trigger}</DrawerTrigger>
      <DrawerContent side="right">
        {/* Brand */}
        <div className="px-6 py-5 border-b border-surface-200 dark:border-navy-700">
          <Link to="/" onClick={onClose} className="flex items-center">
            <img 
              src="/logo-landscape-transparent.png" 
              alt="PT. Pelayaran Nasional Radhika Bahari Nusantara" 
              className="h-[56px] sm:h-[64px] w-auto object-contain" 
            />
          </Link>
        </div>

        {/* Nav links */}
        <div className="flex-1 px-4 py-4 overflow-y-auto">
          <Navigation orientation="vertical" onLinkClick={onClose} />
        </div>

        {/* Bottom CTA */}
        <div className="px-6 py-6 border-t border-surface-200 dark:border-navy-700 space-y-3">
          <Button asChild variant="primary" size="lg" className="w-full">
            <Link to="/contact" onClick={onClose}>
              Get in Touch
            </Link>
          </Button>
          <a
            href="tel:+62318000000"
            className="flex items-center justify-center gap-2 text-sm text-muted-foreground hover:text-navy-800 transition-colors"
          >
            <Phone className="size-4" aria-hidden="true" />
            +62 31 8000 0000
          </a>
        </div>
      </DrawerContent>
    </Drawer>
  )
}
