import * as React from 'react'
import * as DialogPrimitive from '@radix-ui/react-dialog'
import { X } from 'lucide-react'
import { cn } from '@/lib/utils'

const Drawer = DialogPrimitive.Root
const DrawerTrigger = DialogPrimitive.Trigger
const DrawerClose = DialogPrimitive.Close
const DrawerPortal = DialogPrimitive.Portal

const DrawerOverlay = React.forwardRef<
  React.ComponentRef<typeof DialogPrimitive.Overlay>,
  React.ComponentPropsWithoutRef<typeof DialogPrimitive.Overlay>
>(({ className, ...props }, ref) => (
  <DialogPrimitive.Overlay
    ref={ref}
    className={cn('fixed inset-0 z-50 bg-black/60 backdrop-blur-sm data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0', className)}
    {...props}
  />
))
DrawerOverlay.displayName = 'DrawerOverlay'

interface DrawerContentProps extends React.ComponentPropsWithoutRef<typeof DialogPrimitive.Content> {
  side?: 'left' | 'right'
}

const DrawerContent = React.forwardRef<React.ComponentRef<typeof DialogPrimitive.Content>, DrawerContentProps>(
  ({ className, children, side = 'right', ...props }, ref) => (
    <DrawerPortal>
      <DrawerOverlay />
      <DialogPrimitive.Content
        ref={ref}
        className={cn(
          'fixed z-50 top-0 h-full w-full max-w-sm overflow-y-auto bg-white shadow-elevated dark:bg-navy-900',
          'data-[state=open]:animate-in data-[state=closed]:animate-out',
          side === 'right'
            ? 'right-0 data-[state=closed]:slide-out-to-right data-[state=open]:slide-in-from-right'
            : 'left-0 data-[state=closed]:slide-out-to-left data-[state=open]:slide-in-from-left',
          className,
        )}
        {...props}
      >
        <div className="flex items-center justify-between p-4 border-b border-border">
          <DialogPrimitive.Title className="font-display font-semibold text-lg">Menu</DialogPrimitive.Title>
          <DialogPrimitive.Close className="rounded-md p-2 hover:bg-surface-100 transition-colors focus:outline-none focus:ring-2">
            <X className="size-5" aria-hidden="true" />
            <span className="sr-only">Close navigation menu</span>
          </DialogPrimitive.Close>
        </div>
        {children}
      </DialogPrimitive.Content>
    </DrawerPortal>
  ),
)
DrawerContent.displayName = 'DrawerContent'

export { Drawer, DrawerTrigger, DrawerClose, DrawerContent }
