import { MetadataRoute } from 'next'
 
export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = "https://viccabs.com.au"
  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pages/about`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pages/services`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pages/whyChoose`,
      lastModified: new Date(),
    },
    {
      url: `${baseUrl}/pages/contact`,
      lastModified: new Date(),
    },
    
  ]
}