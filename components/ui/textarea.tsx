/**
 * @file Reusable Textarea component
 * @module components/ui/textarea
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description A customizable textarea component with consistent styling
 * and accessibility features. Built as a wrapper around native HTML textarea.
 * 
 * @exports {React.Component} Textarea - The textarea component
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Textarea - Reusable multi-line text input component
 * 
 * @component
 * @param {React.ComponentProps<"textarea">} props - Standard textarea props
 * @param {string} [props.className] - Additional CSS classes
 * @param {React.Ref<HTMLTextAreaElement>} ref - Forwarded ref
 * @returns {JSX.Element} Styled textarea element
 * 
 * @description Provides consistent styling for multi-line text inputs:
 * - Minimum height for better UX
 * - Consistent border and background styling
 * - Focus states with ring effects
 * - Placeholder text styling
 * - Disabled state handling
 * - Responsive typography
 * 
 * @example
 * // Basic usage
 * <Textarea placeholder="Enter your message..." />
 * 
 * // With custom height
 * <Textarea className="min-h-[120px]" placeholder="Detailed description..." />
 */
const Textarea = React.forwardRef<
  HTMLTextAreaElement,
  React.ComponentProps<"textarea">
>(({ className, ...props }, ref) => {
  return (
    <textarea
      className={cn(
        "flex min-h-[80px] w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
        className
      )}
      ref={ref}
      {...props}
    />
  )
})
Textarea.displayName = "Textarea"

export { Textarea }
