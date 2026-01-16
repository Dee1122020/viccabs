/**
 * @file Tailwind CSS configuration
 * @module tailwind.config
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description Tailwind CSS configuration for the Vic Cabs application.
 * Defines content paths, theme extensions, and custom screen breakpoints
 * for responsive design.
 * 
 * @exports {Config} config - Tailwind CSS configuration object
 */

import type { Config } from 'tailwindcss'

const config: Config = {
  /**
   * Content paths for PurgeCSS/Tree Shaking
   * Specifies which files contain Tailwind CSS classes
   */
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  
  /**
   * Theme customization
   * Extends default Tailwind theme with custom values
   */
  theme: {
    extend: {
      /**
       * Custom screen breakpoints for aspect-ratio based responsive design
       * Useful for handling ultra-wide and tall screen layouts
       */
      screens: {
        'widescreen': { 'raw': '(min-aspect-ratio: 3/2)' },
        'tallscreen': { 'raw': '(max-aspect-ratio: 13/20)' },
      }
    },
  },
  
  /**
   * Tailwind CSS plugins
   * Currently empty but can be extended with community plugins
   */
  plugins: [],
}
export default config
