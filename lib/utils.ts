/**
 * @file Utility functions for the Vic Cabs application
 * @module lib/utils
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description Collection of utility functions used throughout the application.
 * Currently includes CSS class name merging utility for Tailwind CSS.
 * 
 * @exports {Function} cn - CSS class name merging utility
 */

import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

/**
 * Merges CSS class names with Tailwind CSS conflict resolution
 * 
 * @function cn
 * @param {...ClassValue[]} inputs - CSS class names or conditional class objects
 * @returns {string} Merged and deduplicated class string
 * 
 * @description Utility function that combines clsx and tailwind-merge to:
 * 1. Handle conditional class names (like `{ 'bg-red-500': isError }`)
 * 2. Merge Tailwind CSS classes intelligently (resolves conflicts)
 * 3. Remove duplicate classes while preserving order
 * 
 * @example
 * // Basic usage
 * cn('px-4 py-2', 'bg-blue-500', 'text-white')
 * 
 * // Conditional classes
 * cn('px-4 py-2', {
 *   'bg-blue-500': isPrimary,
 *   'bg-gray-500': !isPrimary
 * })
 * 
 * // With Tailwind conflict resolution
 * cn('px-4', 'px-6') // Returns 'px-6' (last wins)
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
