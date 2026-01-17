/**
 * @file Thank you page for Vic Cabs website
 * @module app/pages/thank-you/page
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description Confirmation page displayed after successful booking submission.
 * Shows personalized thank you message with booking details and provides
 * next steps for the customer.
 * 
 * @exports {React.Component} ThankYouPage - The thank you page component
 */

import { Metadata } from 'next'
import Link from 'next/link'
import { Suspense } from 'react'
import BookingDetails from './BookingDetails'

export const metadata: Metadata = {
  title: 'Booking Confirmed - Thank You | Vic Cabs',
  description: 'Your Melbourne taxi booking has been confirmed. Thank you for choosing Vic Cabs for your premium taxi and chauffeur service.',
  keywords: [
    'booking confirmed',
    'thank you',
    'melbourne taxi booking confirmation',
    'taxi booking successful',
    'vic cabs booking',
  ],
  alternates: {
    canonical: '/pages/thank-you',
  },
  openGraph: {
    title: 'Booking Confirmed - Thank You | Vic Cabs',
    description: 'Your Melbourne taxi booking has been confirmed. Thank you for choosing Vic Cabs.',
    url: 'https://viccabs.com.au/pages/thank-you',
    type: 'website',
  },
}

/**
 * ThankYouPage - Main thank you page component
 * 
 * @component
 * @returns {JSX.Element} The complete thank you page with confirmation details
 * 
 * @description Displays booking confirmation with:
 * 1. Thank you message and confirmation status
 * 2. Personalized booking details from URL parameters
 * 3. Next steps and what to expect
 * 4. Action buttons for further navigation
 * 5. Trust signals and contact information
 * 
 * Uses Suspense for loading state while parsing URL parameters.
 */
function ThankYouPage() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      {/* Hero Section with Confirmation */}
      <section className="text-center mb-10 md:mb-12">
        <div className="inline-flex items-center justify-center w-20 h-20 md:w-24 md:h-24 bg-green-500 rounded-full mb-6">
          <span className="text-4xl md:text-5xl text-white">✓</span>
        </div>
        
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Thank You for Your Booking!
        </h1>
        
        <p className="text-xl md:text-2xl text-indigo-300 font-semibold mb-6">
          Your booking has been confirmed
        </p>
        
        <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto">
          We've received your booking request and will confirm your ride shortly. 
          You'll receive a confirmation email and SMS with driver details.
        </p>
      </section>

      {/* Booking Details Section */}
      <section className="mb-10 md:mb-12">
        <div className="bg-gray-900 rounded-lg p-6 md:p-8 border border-gray-800 max-w-4xl mx-auto">
          <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
            Your Booking Details
          </h2>
          
          <Suspense fallback={
            <div className="text-center py-8">
              <div className="inline-block animate-spin rounded-full h-8 w-8 border-b-2 border-indigo-500"></div>
              <p className="mt-4 text-gray-400">Loading booking details...</p>
            </div>
          }>
            <BookingDetails />
          </Suspense>
          
          <div className="mt-8 pt-6 border-t border-gray-800">
            <h3 className="text-lg font-semibold text-white mb-4">What Happens Next?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="text-center">
                <div className="bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white mx-auto mb-3">1</div>
                <h4 className="text-white font-medium mb-2">Confirmation</h4>
                <p className="text-gray-400 text-sm">You'll receive email and SMS confirmation within minutes</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white mx-auto mb-3">2</div>
                <h4 className="text-white font-medium mb-2">Driver Assignment</h4>
                <p className="text-gray-400 text-sm">Our team will assign the best driver for your route</p>
              </div>
              
              <div className="text-center">
                <div className="bg-indigo-600 w-10 h-10 rounded-full flex items-center justify-center text-lg font-bold text-white mx-auto mb-3">3</div>
                <h4 className="text-white font-medium mb-2">Pickup Ready</h4>
                <p className="text-gray-400 text-sm">Your driver will arrive at the scheduled time and location</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Action Buttons */}
      <section className="mb-10 md:mb-12 text-center">
        <h2 className="text-2xl md:text-3xl font-semibold text-white mb-6">
          Need Another Ride?
        </h2>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Link 
            href="/pages/book#booking-form" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg w-full sm:w-auto"
          >
            Book Another Ride
          </Link>
          
          <Link 
            href="/" 
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg w-full sm:w-auto"
          >
            Return to Home
          </Link>
        </div>
      </section>

      {/* Contact Information */}
      <section className="bg-gray-900 rounded-lg p-6 md:p-8 mb-8 max-w-4xl mx-auto border border-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
          Need to Modify Your Booking?
        </h2>
        
        <div className="text-center">
          <p className="text-gray-300 text-lg mb-4">
            If you need to make changes to your booking or have any questions, 
            our customer service team is here to help.
          </p>
          
          <div className="flex flex-col md:flex-row justify-center items-center gap-6 mt-6">
            <div className="flex items-center space-x-3">
              <span className="text-2xl">📞</span>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Call us anytime</p>
                <a 
                  href="tel:+61391148670" 
                  className="text-indigo-400 hover:text-indigo-300 font-semibold text-lg"
                >
                  03 9114 8670
                </a>
              </div>
            </div>
            
            <div className="flex items-center space-x-3">
              <span className="text-2xl">✉️</span>
              <div className="text-left">
                <p className="text-gray-400 text-sm">Email us at</p>
                <a 
                  href="mailto:admin@viccabs.com.au" 
                  className="text-indigo-400 hover:text-indigo-300 font-semibold text-lg"
                >
                  admin@viccabs.com.au
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust Signals */}
      <section className="max-w-3xl mx-auto text-center mb-8">
        <div className="flex flex-wrap justify-center items-center gap-6 text-sm text-gray-400">
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-lg">🔒</span>
            <span>SSL Secured Booking</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-lg">✓</span>
            <span>Licensed & Insured</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-lg">★</span>
            <span>5-Star Service</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-green-500 text-lg">📞</span>
            <span>24/7 Support</span>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ThankYouPage