/**
 * @file Robots.txt configuration for search engines
 * @module app/robots
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description Defines robots.txt rules for search engine crawling.
 * Controls which pages search engines can index and provides sitemap location.
 * 
 * @exports {Function} robots - Robots.txt configuration function
 */

import { MetadataRoute } from 'next'
 
export default function robots(): MetadataRoute.Robots {
  const baseUrl = "https://viccabs.com.au"
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  }
}