/**
 * @file Homepage component for Vic Cabs website
 * @module app/page
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description Main landing page showcasing taxi and chauffeur services in Melbourne.
 * Includes hero section, service overview, value propositions, coverage area,
 * and call-to-action sections. Optimized for SEO with comprehensive metadata.
 * 
 * @exports {React.Component} Home - The homepage component
 */

import Link from "next/link"
import Image from "next/image"
import { Metadata } from "next"

/**
 * Page-specific SEO metadata for the homepage
 * 
 * @constant {Metadata}
 * @description Optimized metadata for search engines and social sharing:
 * - Targeted keywords for Melbourne taxi services
 * - Canonical URL to prevent duplicate content issues
 * - Open Graph tags for social media previews
 * - Comprehensive service descriptions for better CTR
 */
export const metadata: Metadata = {
  title: 'Melbourne Taxi Service | Airport Transfer | Chauffeur Service',
  description: 'Premier Melbourne taxi service with 24/7 availability. Professional airport transfers, luxury chauffeur service, and reliable cab bookings. Book your Melbourne taxi online or call 0477 226 627 now.',
  keywords: [
    'melbourne taxi',
    'melbourne taxi service',
    'melbourne airport taxi',
    'airport transfer melbourne',
    'chauffeur service melbourne',
    'taxi booking melbourne',
    'melbourne cab',
    'luxury taxi melbourne',
    'book taxi melbourne',
  ],
  alternates: {
    canonical: '/',
  },
  openGraph: {
    title: 'Melbourne Taxi Service | Airport Transfer | Chauffeur Service - Vic Cabs',
    description: 'Premier Melbourne taxi service with 24/7 availability. Professional airport transfers, luxury chauffeur service, and reliable cab bookings.',
    url: 'https://viccabs.com.au',
    type: 'website',
    images: [
      {
        url: '/flinders-street-station2.jpg',
        width: 1200,
        height: 630,
        alt: 'Vic Cabs Melbourne Taxi Service',
      },
    ],
  },
}

/**
 * Home - Main homepage component
 * 
 * @component
 * @returns {JSX.Element} The complete homepage with all sections
 * 
 * @description Organized into distinct sections for better user experience and SEO:
 * 1. Hero Section - Primary value proposition and main call-to-action
 * 2. Services Overview - Key service offerings with descriptions
 * 3. Value Propositions - Reasons to choose Vic Cabs
 * 4. Coverage Area - Service area information
 * 5. Call-to-Action - Final booking encouragement
 * 
 * Each section uses semantic HTML5 elements for better accessibility and SEO.
 */
export default function Home() {
  return (
    <div className="max-w-7xl mx-auto px-4 md:px-6">
      {/* 
        Hero Section - Primary landing area
        Features headline, value proposition, and main booking CTA
        Uses responsive design with image-text layout
      */}
      <section className="flex flex-col justify-center p-4 md:p-6 items-center gap-6 md:gap-8 mb-12 md:mb-16 lg:flex-row-reverse lg:items-start">
        <div className="w-full mt-4 md:w-1/2 lg:mt-8">
          <Image
            src="/flinders-street-station2.jpg"
            alt="Melbourne taxi service - Premium transport in Melbourne CBD"
            className='opacity-80 rounded-lg w-full h-auto'
            width={500}
            height={500}
            priority
          />
        </div>

        <article className='w-full text-white md:w-1/2'>
          <h1 className='max-w-2xl text-2xl text-center md:text-3xl lg:text-4xl lg:text-left text-gray-100 mt-4 md:mt-6 lg:ml-7 mr-5 font-bold leading-tight'>
            Premium <span className="text-indigo-300">Taxi & Chauffeur Service</span> in Melbourne
          </h1>

          <p className='max-w-2xl text-base text-center md:text-lg lg:text-xl lg:text-left mt-6 md:mt-8 lg:ml-7 text-gray-300 normal-case'>
            Welcome to Vic Cabs, Melbourne's premier taxi and chauffeur service. Whether you need a reliable <strong>Melbourne airport taxi</strong>, luxury chauffeur service, or quick cab booking across the city, we deliver excellence every time.
          </p>

          <p className='max-w-2xl text-base text-center md:text-lg lg:text-xl lg:text-left mt-4 lg:ml-7 text-gray-300 normal-case'>
            Our professional drivers and top-of-the-range vehicles ensure your journey is comfortable, safe, and stylish. Available 24/7 across Melbourne and surrounding suburbs.
          </p>

          <div className='max-w-2xl text-center lg:text-left mt-6 lg:ml-7 mb-3'>
            <Link 
              href="/pages/book#booking-form" 
              className='inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg'
            >
              Book Your Ride Now
            </Link>
            <p className='mt-3 text-sm text-gray-400 normal-case'>
              Or call us: <Link href="tel:+61477226627" className="text-indigo-400 hover:text-indigo-300 font-medium">0477 226 627</Link>
            </p>
          </div>
        </article>
      </section>

      {/* 
        Services Overview Section - Key service offerings
        Grid layout showcasing different taxi and chauffeur services
        Each card includes description and link to learn more
      */}
      <section className="mb-12 md:mb-16 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8 md:mb-12">
          Our Melbourne Taxi & Chauffeur Services
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto">
          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-indigo-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">Airport Transfers</h3>
            <p className="text-gray-400 mb-4 normal-case">
              Professional <strong>Melbourne airport taxi</strong> service to and from Tullamarine. Flight tracking, meet-and-greet, and fixed pricing available.
            </p>
            <Link href="/pages/services" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-indigo-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">Premium Taxi Service</h3>
            <p className="text-gray-400 mb-4 normal-case">
              24/7 <strong>Melbourne taxi booking</strong> with modern vehicles. Perfect for city travel, shopping trips, or night out transportation.
            </p>
            <Link href="/pages/services" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-indigo-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">Chauffeur Service</h3>
            <p className="text-gray-400 mb-4 normal-case">
              Luxury <strong>chauffeur service Melbourne</strong> for corporate events, special occasions, and executive transport. Professional and discreet.
            </p>
            <Link href="/pages/services" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-indigo-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">Family SUVs</h3>
            <p className="text-gray-400 mb-4 normal-case">
              Spacious family-friendly SUV taxis for groups. Perfect for airport runs with luggage or family outings across Melbourne.
            </p>
            <Link href="/pages/services" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>

          <div className="bg-gray-900 p-6 rounded-lg border border-gray-800 hover:border-indigo-600 transition-colors">
            <h3 className="text-xl font-semibold text-white mb-3">Package Delivery</h3>
            <p className="text-gray-400 mb-4 normal-case">
              Reliable <strong>courier service Melbourne</strong> for packages and parcels. Same-day delivery available across Melbourne and suburbs.
            </p>
            <Link href="/pages/services" className="text-indigo-400 hover:text-indigo-300 text-sm font-medium">
              Learn More →
            </Link>
          </div>
        </div>
      </section>

      {/* 
        Why Choose Section - Value propositions and differentiators
        Icon-based grid highlighting key benefits of choosing Vic Cabs
        Includes link to detailed "Why Choose Us" page
      */}
      <section className="mb-12 md:mb-16 px-4 md:px-6 bg-gray-900 py-10 md:py-12 rounded-lg">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-8">
          Why Choose Vic Cabs for Your Melbourne Transport
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          <div className="text-center">
            <div className="text-4xl mb-3">🚖</div>
            <h3 className="text-lg font-semibold text-white mb-2">24/7 Availability</h3>
            <p className="text-gray-400 text-sm normal-case">
              Round-the-clock taxi service across Melbourne. Book anytime, day or night.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">✈️</div>
            <h3 className="text-lg font-semibold text-white mb-2">Airport Specialists</h3>
            <p className="text-gray-400 text-sm normal-case">
              Expert Melbourne airport transfers with flight tracking and no waiting fees.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">👔</div>
            <h3 className="text-lg font-semibold text-white mb-2">Professional Drivers</h3>
            <p className="text-gray-400 text-sm normal-case">
              Licensed, experienced chauffeurs committed to your safety and comfort.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">💎</div>
            <h3 className="text-lg font-semibold text-white mb-2">Luxury Fleet</h3>
            <p className="text-gray-400 text-sm normal-case">
              Premium vehicles maintained to the highest standards for your journey.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">💳</div>
            <h3 className="text-lg font-semibold text-white mb-2">Easy Booking</h3>
            <p className="text-gray-400 text-sm normal-case">
              Book online instantly or call us. Multiple payment options available.
            </p>
          </div>

          <div className="text-center">
            <div className="text-4xl mb-3">📍</div>
            <h3 className="text-lg font-semibold text-white mb-2">Wide Coverage</h3>
            <p className="text-gray-400 text-sm normal-case">
              Serving Melbourne CBD and all surrounding suburbs across Victoria.
            </p>
          </div>
        </div>

        <div className="text-center mt-8">
          <Link 
            href="/pages/whyChoose" 
            className="text-indigo-400 hover:text-indigo-300 font-medium"
          >
            Discover More About Us →
          </Link>
        </div>
      </section>

      {/* 
        Coverage Area Section - Service area information
        Describes geographical coverage and specialization areas
        Important for local SEO and customer expectations
      */}
      <section className="mb-12 md:mb-16 px-4 md:px-6">
        <h2 className="text-2xl md:text-3xl font-bold text-center text-white mb-6">
          Melbourne Taxi Service Coverage
        </h2>
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-gray-300 text-base md:text-lg mb-4 normal-case">
            Our <strong>Melbourne taxi service</strong> operates throughout the greater Melbourne area, including Melbourne CBD, St Kilda, Brighton, Carlton, Fitzroy, Richmond, South Yarra, Docklands, and all suburbs. We specialize in <strong>Melbourne airport transfers</strong> to Tullamarine Airport with reliable pickup and drop-off services.
          </p>
          <p className="text-gray-300 text-base md:text-lg normal-case">
            Whether you need a quick city ride or a long-distance transfer, Vic Cabs provides the most reliable <strong>taxi booking Melbourne</strong> experience with competitive rates and exceptional service.
          </p>
        </div>
      </section>

      {/* 
        Call-to-Action Section - Final booking encouragement
        Prominent section with multiple action options
        Uses contrasting design to draw attention
      */}
      <section className="mb-12 md:mb-16 px-4 md:px-6 text-center bg-indigo-900 bg-opacity-20 py-10 md:py-12 rounded-lg border border-indigo-800">
        <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
          Ready to Book Your Melbourne Taxi?
        </h2>
        <p className="text-gray-300 text-lg mb-6 normal-case max-w-2xl mx-auto">
          Experience premium transport with Vic Cabs. Book your ride online now or call us for immediate assistance.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/pages/book#booking-form" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
          >
            Book Online Now
          </Link>
          <Link 
            href="/pages/contact" 
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </div>
  )
}
