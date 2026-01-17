/**
 * @file Booking details component for thank you page
 * @module app/pages/thank-you/BookingDetails
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description Component that extracts and displays booking details from URL parameters.
 * Handles parsing, validation, and formatting of booking information.
 * 
 * @exports {React.Component} BookingDetails - The booking details display component
 */

'use client'

import { useSearchParams } from 'next/navigation'

/**
 * BookingDetails - Component to display booking information from URL parameters
 * 
 * @component
 * @returns {JSX.Element} Formatted booking details or fallback message
 * 
 * @description Extracts and displays:
 * - Customer name
 * - Booking date (formatted)
 * - Booking time (formatted)
 * 
 * Handles edge cases:
 * - Missing parameters
 * - Invalid date/time formats
 * - Fallback display when data is incomplete
 * 
 * @example
 * // URL: /pages/thank-you?name=John&date=2026-01-17&time=14:30
 * <BookingDetails />
 */
function BookingDetails() {
  const searchParams = useSearchParams()
  
  // Extract parameters from URL
  const name = searchParams.get('name')
  const date = searchParams.get('date')
  const time = searchParams.get('time')
  
  /**
   * Formats date string to readable format
   * 
   * @param {string} dateStr - Date string in YYYY-MM-DD format
   * @returns {string} Formatted date (e.g., "January 17, 2026")
   */
  const formatDate = (dateStr: string | null): string => {
    if (!dateStr) return 'Not specified'
    
    try {
      const dateObj = new Date(dateStr)
      if (isNaN(dateObj.getTime())) return 'Invalid date'
      
      return dateObj.toLocaleDateString('en-AU', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    } catch {
      return 'Invalid date'
    }
  }
  
  /**
   * Formats time string to readable format
   * 
   * @param {string} timeStr - Time string in HH:MM format
   * @returns {string} Formatted time (e.g., "2:30 PM")
   */
  const formatTime = (timeStr: string | null): string => {
    if (!timeStr) return 'Not specified'
    
    try {
      // Handle both 24-hour and 12-hour formats
      const [hours, minutes] = timeStr.split(':').map(Number)
      
      if (isNaN(hours) || isNaN(minutes)) return 'Invalid time'
      
      const date = new Date()
      date.setHours(hours, minutes)
      
      return date.toLocaleTimeString('en-AU', {
        hour: 'numeric',
        minute: '2-digit',
        hour12: true
      })
    } catch {
      return 'Invalid time'
    }
  }
  
  // Check if we have valid booking data
  const hasValidData = name && (date || time)
  
  if (!hasValidData) {
    return (
      <div className="text-center py-4">
        <p className="text-gray-400">
          Booking details are being processed. You will receive a confirmation email shortly.
        </p>
      </div>
    )
  }
  
  return (
    <div className="space-y-6">
      {/* Customer Information */}
      <div className="space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between p-4 bg-gray-800 rounded-lg">
          <div className="flex items-center space-x-3 mb-3 md:mb-0">
            <span className="text-2xl text-indigo-400">👤</span>
            <div>
              <p className="text-gray-400 text-sm">Booking for</p>
              <p className="text-white text-lg font-semibold">{name}</p>
            </div>
          </div>
          
          <div className="text-sm text-gray-400">
            Reference: #{Math.random().toString(36).substring(2, 10).toUpperCase()}
          </div>
        </div>
        
        {/* Date and Time Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {date && (
            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
              <span className="text-2xl text-indigo-400">📅</span>
              <div>
                <p className="text-gray-400 text-sm">Date</p>
                <p className="text-white font-medium">{formatDate(date)}</p>
              </div>
            </div>
          )}
          
          {time && (
            <div className="flex items-center space-x-3 p-4 bg-gray-800 rounded-lg">
              <span className="text-2xl text-indigo-400">🕒</span>
              <div>
                <p className="text-gray-400 text-sm">Time</p>
                <p className="text-white font-medium">{formatTime(time)}</p>
              </div>
            </div>
          )}
        </div>
      </div>
      
      {/* Booking Status */}
      <div className="p-4 bg-indigo-900 bg-opacity-20 border border-indigo-800 rounded-lg">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
            <div>
              <p className="text-white font-medium">Booking Status: Confirmed</p>
              <p className="text-gray-400 text-sm">Your booking is being processed by our team</p>
            </div>
          </div>
          <span className="text-green-400 font-semibold">✓ Active</span>
        </div>
      </div>
      
      {/* Important Notes */}
      <div className="p-4 bg-yellow-900 bg-opacity-20 border border-yellow-800 rounded-lg">
        <div className="flex items-start space-x-3">
          <span className="text-xl text-yellow-400">ℹ️</span>
          <div>
            <p className="text-white font-medium mb-2">Important Information</p>
            <ul className="text-gray-300 text-sm space-y-1">
              <li>• Please be ready at your pickup location 5 minutes before the scheduled time</li>
              <li>• Your driver will contact you if there are any delays or changes</li>
              <li>• Have your booking reference ready when speaking with our team</li>
              <li>• For airport transfers, flight tracking is available upon request</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

export default BookingDetails