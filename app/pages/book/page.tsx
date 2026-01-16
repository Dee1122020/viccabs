/**
 * @file Booking page for Vic Cabs website
 * @module app/pages/book/page
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description Main booking page with comprehensive booking form.
 * Includes service information, pricing details, and the booking form.
 * Optimized for conversion with clear call-to-action elements.
 * 
 * @exports {React.Component} BookPage - The booking page component
 */

import BookingForm from '@/components/BookingForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Book Melbourne Taxi Online - Instant Taxi Booking | Vic Cabs',
  description: 'Book your Melbourne taxi online with Vic Cabs. Instant confirmation, 24/7 availability, airport transfers, luxury chauffeur service. Secure online booking or call 0477 226 627.',
  keywords: [
    'book melbourne taxi online',
    'instant taxi booking',
    'melbourne taxi booking',
    'book airport transfer melbourne',
    'online cab booking melbourne',
    'book chauffeur melbourne',
    'taxi reservation melbourne',
  ],
  alternates: {
    canonical: '/pages/book',
  },
  openGraph: {
    title: 'Book Melbourne Taxi Online - Instant Taxi Booking | Vic Cabs',
    description: 'Book your Melbourne taxi online with instant confirmation. 24/7 availability, airport transfers, luxury chauffeur service.',
    url: 'https://viccabs.com.au/pages/book',
    type: 'website',
  },
}

function page() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-6">
      <h1 className='text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold text-white'>
        Book Your Melbourne Taxi Online
      </h1>
      
      {/* Introductory Content */}
      <div className="max-w-3xl mx-auto text-center mb-8 md:mb-10">
        <p className="text-lg md:text-xl text-gray-300 mt-4 mb-4">
          Welcome to Vic Cabs' easy <strong>online taxi booking Melbourne</strong> system. Complete the form below to instantly book your premium taxi or chauffeur service. Whether you need an <strong>airport transfer Melbourne</strong>, corporate chauffeur, or city transport, we've got you covered.
        </p>
        <p className="text-base md:text-lg text-gray-400 mb-6">
          Or call us now for immediate bookings: <a href="tel:+61477226627" className="text-indigo-400 hover:text-indigo-300 font-semibold">0477 226 627</a>
        </p>
        <a 
          href="#booking-form"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors duration-200 text-lg"
        >
          Book Now
        </a>
      </div>

      {/* Booking Benefits */}
      <div className="bg-gray-900 rounded-lg p-6 md:p-8 mb-8 md:mb-10 max-w-4xl mx-auto border border-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
          Why Book With Vic Cabs?
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
          <div className="flex items-start space-x-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Instant Confirmation</h3>
              <p className="text-gray-400 text-sm">Receive immediate booking confirmation via email and SMS</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">24/7 Availability</h3>
              <p className="text-gray-400 text-sm">Book anytime, day or night, for immediate or scheduled pickups</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Transparent Pricing</h3>
              <p className="text-gray-400 text-sm">No hidden fees or surge pricing - know your fare upfront</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Secure Payment</h3>
              <p className="text-gray-400 text-sm">SSL encrypted booking system for your security and privacy</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Professional Drivers</h3>
              <p className="text-gray-400 text-sm">Licensed, experienced, and background-checked chauffeurs</p>
            </div>
          </div>

          <div className="flex items-start space-x-3">
            <span className="text-2xl">✓</span>
            <div>
              <h3 className="text-lg font-semibold text-white mb-1">Premium Fleet</h3>
              <p className="text-gray-400 text-sm">Luxury sedans and spacious SUVs for ultimate comfort</p>
            </div>
          </div>
        </div>
      </div>

      {/* How to Book Section */}
      <div className="max-w-3xl mx-auto mb-8 md:mb-10">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
          How to Book Your Melbourne Taxi
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-3">1</div>
            <h3 className="text-lg font-semibold text-white mb-2">Fill the Form</h3>
            <p className="text-gray-400 text-sm">Enter your pickup location, destination, date, and time</p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-3">2</div>
            <h3 className="text-lg font-semibold text-white mb-2">Get Confirmation</h3>
            <p className="text-gray-400 text-sm">Receive instant confirmation with driver and vehicle details</p>
          </div>

          <div className="text-center">
            <div className="bg-indigo-600 w-12 h-12 rounded-full flex items-center justify-center text-xl font-bold text-white mx-auto mb-3">3</div>
            <h3 className="text-lg font-semibold text-white mb-2">Enjoy Your Ride</h3>
            <p className="text-gray-400 text-sm">Your driver arrives on time for a premium travel experience</p>
          </div>
        </div>
      </div>

      {/* Popular Routes Section */}
      <div className="bg-gray-900 rounded-lg p-6 md:p-8 mb-8 md:mb-10 max-w-4xl mx-auto border border-gray-800">
        <h2 className="text-2xl md:text-3xl font-semibold text-white text-center mb-6">
          Popular Routes
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-gray-300">
          <div className="flex items-center space-x-2">
            <span className="text-indigo-400">→</span>
            <span>Melbourne CBD to Tullamarine Airport</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-400">→</span>
            <span>Airport to Melbourne CBD</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-400">→</span>
            <span>Melbourne CBD to South Yarra</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-400">→</span>
            <span>St Kilda to Airport</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-400">→</span>
            <span>Brighton to Melbourne CBD</span>
          </div>
          <div className="flex items-center space-x-2">
            <span className="text-indigo-400">→</span>
            <span>Docklands to Airport</span>
          </div>
        </div>
        
        <p className="text-center text-gray-400 text-sm mt-4">
          *Fixed rates available for airport transfers. Contact us for quotes.
        </p>
      </div>

      {/* Booking Form */}
      <div id="booking-form" className="mb-8 scroll-mt-20">
        <h2 className='text-2xl md:text-3xl font-semibold text-center mb-6 text-white'>
          Complete Your Booking
        </h2>
        <div className='mt-2 w-full md:w-3/4 md:mx-auto'>
          <BookingForm />
        </div>
      </div>

      {/* Trust Signals */}
      <div className="max-w-3xl mx-auto text-center mb-8">
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
      </div>
    </div>
  )
}

export default page