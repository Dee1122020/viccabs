/**
 * @file Next.js configuration file
 * @module next.config
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description Configuration for Next.js application including image optimization,
 * compression settings, and other build-time configurations.
 * 
 * @exports {NextConfig} nextConfig - Next.js configuration object
 */

/** @type {import('next').NextConfig} */
const nextConfig = {
  /**
   * Image optimization configuration
   * Optimizes images for performance with modern formats and responsive sizes
   */
  images: {
    // Modern image formats for better compression
    formats: ['image/avif', 'image/webp'],
    
    // Device sizes for responsive images (from mobile to 4K displays)
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    
    // Image sizes for different use cases (icons, thumbnails, etc.)
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    
    // Minimum cache time-to-live in seconds
    minimumCacheTTL: 60,
  },
  
  /**
   * Enable gzip compression for better performance
   */
  compress: true,
}

module.exports = nextConfig
