/**
 * @file Sitemap configuration for search engines
 * @module app/sitemap
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description Defines XML sitemap for search engine optimization.
 * Specifies URLs, change frequencies, and priority levels for all pages.
 * 
 * @exports {Function} sitemap - Sitemap configuration function
 */

import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://viccabs.com.au"
  return [
    {
      url: baseUrl,
      changeFrequency: 'weekly',
      priority: 1.0,
    },
    {
      url: `${baseUrl}/pages/book`,
      changeFrequency: 'monthly',
      priority: 0.9,
    },
    {
      url: `${baseUrl}/pages/services`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/ads/airport-transfer`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/ads/melbourne-taxi`,
      changeFrequency: 'monthly',
      priority: 0.8,
    },
    {
      url: `${baseUrl}/pages/about`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pages/whyChoose`,
      changeFrequency: 'monthly',
      priority: 0.7,
    },
    {
      url: `${baseUrl}/pages/contact`,
      changeFrequency: 'monthly',
      priority: 0.6,
    },
  ]
}