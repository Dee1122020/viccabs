/**
 * @file Reusable Label component
 * @module components/ui/label
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description Accessible label component built with Radix UI Label primitive.
 * Provides consistent styling for form labels with disabled state handling.
 * 
 * @exports {React.Component} Label - The label component
 */

import * as React from "react"
import * as LabelPrimitive from "@radix-ui/react-label"
import { cva, type VariantProps } from "class-variance-authority"

import { cn } from "@/lib/utils"

/**
 * CVA configuration for label variants
 * 
 * @constant {Function} labelVariants
 * @description Defines base label styles with disabled state handling
 */
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
)

/**
 * Label - Accessible form label component
 * 
 * @component
 * @param {React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> & VariantProps<typeof labelVariants>} props - Label properties
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref<React.ElementRef<typeof LabelPrimitive.Root>>} ref - Forwarded ref
 * @returns {JSX.Element} Styled label element
 * 
 * @description Wraps Radix UI Label primitive with consistent styling:
 * - Standard typography (small, medium weight)
 * - Proper line height
 * - Disabled state styling (cursor and opacity)
 * - Accessibility features from Radix UI
 * 
 * @example
 * // Basic usage
 * <Label htmlFor="email">Email Address</Label>
 * 
 * // With additional styling
 * <Label htmlFor="name" className="text-lg">Full Name</Label>
 */
const Label = React.forwardRef<
  React.ElementRef<typeof LabelPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof LabelPrimitive.Root> &
    VariantProps<typeof labelVariants>
>(({ className, ...props }, ref) => (
  <LabelPrimitive.Root
    ref={ref}
    className={cn(labelVariants(), className)}
    {...props}
  />
))
Label.displayName = LabelPrimitive.Root.displayName

export { Label }
