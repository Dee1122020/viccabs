/**
 * @file Root layout component for the Vic Cabs application
 * @module app/layout
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description Defines the root layout structure including metadata, SEO configuration,
 * structured data for local business schema, and global components.
 * This layout wraps all pages in the application and provides consistent
 * header/footer navigation, analytics, and global styles.
 * 
 * @exports {React.Component} RootLayout - The root layout component
 */

import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import Script from 'next/script'
import './globals.css'
import Footer from '@/components/Footer'
import NavMenu from '@/components/NavMenu'

/**
 * Google Font configuration using Outfit font family
 * Optimized with next/font for performance and automatic font optimization
 */
const outfit = Outfit({ subsets: ['latin'] })

/**
 * SEO Metadata configuration for the Vic Cabs website
 * 
 * @constant {Metadata}
 * @description Comprehensive SEO configuration including:
 * - Title templates and defaults
 * - Search engine optimization keywords
 * - Open Graph and Twitter card metadata
 * - Structured data for local business schema
 * - Canonical URLs and language alternates
 * - Search engine verification codes
 * 
 * This metadata is used by search engines and social media platforms
 * to properly index and display the website content.
 */
export const metadata: Metadata = {
  metadataBase: new URL('https://viccabs.com.au'),
  title: {
    default: 'Vic Cabs | Premier Melbourne Taxi & Chauffeur Service',
    template: '%s | Vic Cabs'
  },
  description: 'Premium taxi and chauffeur service in Melbourne. 24/7 airport transfers, luxury vehicles, professional drivers. Book your Melbourne taxi online or call 03 9114 8670 for instant booking.',
  applicationName: 'Vic Cabs',
  keywords: [
    'melbourne taxi',
    'melbourne airport taxi',
    'chauffeur service melbourne',
    'airport transfer melbourne',
    'taxi booking melbourne',
    'luxury taxi melbourne',
    'corporate chauffeur melbourne',
    'melbourne cab service',
    'tullamarine airport taxi',
    '24/7 taxi melbourne',
    'premium taxi service melbourne',
    'book taxi melbourne online',
    'melbourne taxi booking',
    'chauffeur cars melbourne',
    'airport pickup melbourne'
  ],
  authors: [{ name: 'Vic Cabs' }],
  creator: 'Vic Cabs',
  publisher: 'Vic Cabs',
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: '/',
    languages: {
      'en-AU': '/en-AU',
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_AU',
    url: 'https://viccabs.com.au',
    siteName: 'Vic Cabs',
    title: 'Vic Cabs | Premier Melbourne Taxi & Chauffeur Service',
    description: 'Premium taxi and chauffeur service in Melbourne. 24/7 airport transfers, luxury vehicles, professional drivers. Book your Melbourne taxi online now.',
    images: [
      {
        url: '/flinders-street-station2.jpg',
        width: 1200,
        height: 630,
        alt: 'Vic Cabs - Premium Melbourne Taxi Service',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Vic Cabs | Premier Melbourne Taxi & Chauffeur Service',
    description: 'Premium taxi and chauffeur service in Melbourne. 24/7 airport transfers, luxury vehicles, professional drivers.',
    images: ['/flinders-street-station2.jpg'],
    creator: '@viccabs',
  },
  verification: {
    google: 'your-google-verification-code',
    other: {
      'msvalidate.01': 'your-bing-verification-code',
    },
  },
}

/**
 * RootLayout - Main layout component that wraps all pages
 * 
 * @component
 * @param {Object} props - Component properties
 * @param {React.ReactNode} props.children - Child components to render within layout
 * @returns {JSX.Element} The root layout structure
 * 
 * @description Provides the foundational layout structure including:
 * - HTML document structure with language attribute
 * - Structured data for local business schema (JSON-LD)
 * - Google Analytics integration
 * - Global navigation and footer components
 * - Consistent styling and theming
 * 
 * @example
 * // Usage in Next.js App Router
 * export default function Page() {
 *   return (
 *     <div>Page content</div>
 *   )
 * }
 */
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  /**
   * Structured data for local business schema (JSON-LD)
   * Used by search engines to understand business information
   * and display rich results in search listings
   * 
   * @constant {Object}
   * @see https://schema.org/LocalBusiness
   */
  const structuredData = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': 'https://viccabs.com.au',
    name: 'Vic Cabs',
    alternateName: 'Victoria Cabs Melbourne',
    description: 'Premium taxi and chauffeur service in Melbourne offering 24/7 airport transfers, luxury vehicles, and professional drivers.',
    url: 'https://viccabs.com.au',
    telephone: '+61391148670',
    priceRange: '$$',
    image: 'https://viccabs.com.au/flinders-street-station2.jpg',
    logo: 'https://viccabs.com.au/car.png',
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Melbourne',
      addressRegion: 'VIC',
      addressCountry: 'AU',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -37.8136,
      longitude: 144.9631,
    },
    areaServed: [
      {
        '@type': 'City',
        name: 'Melbourne',
      },
      {
        '@type': 'State',
        name: 'Victoria',
      },
    ],
    openingHoursSpecification: {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '00:00',
      closes: '23:59',
    },
    serviceType: [
      'Taxi Service',
      'Chauffeur Service',
      'Airport Transfer',
      'Corporate Transportation',
      'Luxury Car Service',
    ],
    paymentAccepted: 'Cash, Credit Card, Debit Card',
    currenciesAccepted: 'AUD',
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Taxi and Chauffeur Services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Premium Taxi Service',
            description: 'Professional taxi service in Melbourne with modern vehicles and experienced drivers',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Chauffeur Service',
            description: 'Luxury chauffeur service for corporate and special occasions',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Airport Transfer',
            description: 'Reliable airport transfer service to and from Melbourne Airport',
          },
        },
        {
          '@type': 'Offer',
          itemOffered: {
            '@type': 'Service',
            name: 'Family SUV Service',
            description: 'Spacious SUV taxi service for families and groups',
          },
        },
      ],
    },
  }

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* 
          Structured data injection for search engine optimization
          Provides local business information to search engines
        */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={outfit.className} suppressHydrationWarning>
        {/* 
          Google Analytics integration
          Loads analytics script after interactive for performance
          Tracks page views and user interactions
        */}
        <Script
          strategy="afterInteractive"
          src="https://www.googletagmanager.com/gtag/js?id=G-03ZMZ4KC9Y"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-03ZMZ4KC9Y');
          `}
        </Script>
        
        {/* 
          Main content container with consistent styling
          Includes global navigation, page content, and footer
        */}
        <main className='bg-black text-gray-400'>
          <NavMenu/>
          {children}
          <Footer/>
        </main>
      </body>
    </html>
  )
}
