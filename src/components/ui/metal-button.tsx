import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'
/** Brand outline with a reversible fill sweep on hover, focus and press. */
export const MetalButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(function MetalButton({className, children, ...props}, ref) {
  return <button ref={ref} className={cn('metal-button outline-action',className)} {...props}>{children}</button>
})
