/**
 * @file Reusable Input component
 * @module components/ui/input
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description A customizable input component with consistent styling,
 * focus states, and accessibility features. Built as a wrapper around
 * native HTML input element with Tailwind CSS styling.
 * 
 * @exports {React.Component} Input - The input component
 */

import * as React from "react"

import { cn } from "@/lib/utils"

/**
 * Input - Reusable input component with consistent styling
 * 
 * @component
 * @param {React.ComponentProps<"input">} props - Standard input props
 * @param {string} [props.className] - Additional CSS classes
 * @param {string} [props.type] - Input type (text, email, password, etc.)
 * @param {React.Ref<HTMLInputElement>} ref - Forwarded ref
 * @returns {JSX.Element} Styled input element
 * 
 * @description Provides consistent styling for all input fields:
 * - Standard height and padding
 * - Border styling with focus states
 * - File input styling
 * - Placeholder text styling
 * - Disabled state styling
 * - Responsive typography
 * 
 * @example
 * // Basic usage
 * <Input placeholder="Enter your name" />
 * 
 * // With ref
 * <Input ref={inputRef} type="email" placeholder="Email address" />
 * 
 * // With additional classes
 * <Input className="w-full" placeholder="Search..." />
 */
const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-base ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        )}
        ref={ref}
        {...props}
      />
    )
  }
)
Input.displayName = "Input"

export { Input }
