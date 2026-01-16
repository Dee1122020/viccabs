/**
 * @file Reusable Button component with variants
 * @module components/ui/button
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description A customizable button component built with Radix UI Slot
 * and Class Variance Authority (CVA) for variant management.
 * Supports multiple styles, sizes, and can render as different elements.
 * 
 * @exports {React.Component} Button - The button component
 * @exports {Function} buttonVariants - CVA variant generator function
 */

import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * CVA (Class Variance Authority) configuration for button variants
 * 
 * @constant {Function} buttonVariants
 * @description Defines all possible button styles and sizes using Tailwind CSS.
 * Uses CVA pattern for type-safe variant management.
 * 
 * Base styles apply to all buttons:
 * - Flex layout with centering
 * - Rounded corners and typography
 * - Focus states for accessibility
 * - Disabled state styling
 * - SVG icon handling
 * 
 * Variants: default, destructive, outline, secondary, ghost, link
 * Sizes: default, sm (small), lg (large), icon (square icon button)
 * 
 * @example
 * // Generate class names for a large destructive button
 * buttonVariants({ variant: 'destructive', size: 'lg' })
 */
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground hover:bg-primary/90",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3",
        lg: "h-11 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

/**
 * Button component props interface
 * 
 * @interface ButtonProps
 * @extends React.ButtonHTMLAttributes<HTMLButtonElement>
 * @extends VariantProps<typeof buttonVariants>
 * 
 * @property {boolean} [asChild] - When true, renders as child component using Radix Slot
 * @property {string} [className] - Additional CSS classes
 * @property {Variant} [variant] - Button style variant
 * @property {Size} [size] - Button size variant
 * 
 * @description Combines standard button attributes with CVA variant props.
 * The `asChild` prop enables composition with other components using Radix Slot.
 */
export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

/**
 * Button - Reusable button component with variants
 * 
 * @component
 * @param {ButtonProps} props - Button properties
 * @param {React.Ref<HTMLButtonElement>} ref - Forwarded ref
 * @returns {JSX.Element} Rendered button element
 * 
 * @description A flexible button component that supports:
 * - Multiple visual variants (default, destructive, outline, etc.)
 * - Different sizes (small, default, large, icon)
 * - Composition via Radix Slot (`asChild` prop)
 * - Full accessibility support (focus states, disabled states)
 * - Forward ref for direct DOM access
 * 
 * @example
 * // Basic button
 * <Button>Click me</Button>
 * 
 * // Large destructive button
 * <Button variant="destructive" size="lg">Delete</Button>
 * 
 * // Button as child (for composition)
 * <Button asChild>
 *   <Link href="/dashboard">Dashboard</Link>
 * </Button>
 */
const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
