import { forwardRef, type ButtonHTMLAttributes } from 'react'
import { cn } from '../../lib/utils'
/** The reference's metallic construction, recolored to the client's yellow. */
export const MetalButton = forwardRef<HTMLButtonElement, ButtonHTMLAttributes<HTMLButtonElement>>(function MetalButton({className, children, ...props}, ref) {
  return <button ref={ref} className={cn('metal-button',className)} {...props}><span className="metal-shine" aria-hidden="true" />{children}</button>
})
