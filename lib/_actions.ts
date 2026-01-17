/**
 * @file Server actions for booking form processing
 * @module lib/_actions
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description Server-side functions for handling booking form submissions.
 * Includes validation, email notifications via Resend, and WhatsApp notifications.
 * These functions run on the server for security and API key protection.
 * 
 * @exports {Function} formEntry - Form validation function
 * @exports {Function} sendEmail - Email notification function
 * @exports {Function} sendBookingWhatsApp - WhatsApp notification function
 */

'use server'

import { z } from "zod"
import { BookingInput, bookingSchema } from "@/models/Booking"
import { Resend } from "resend"
import BookingEmail from "@/email/BookingEmail"
import axios from 'axios'

/**
 * Validates booking form data using Zod schema
 * 
 * @async
 * @function formEntry
 * @param {BookingInput} data - Raw booking form data
 * @returns {Promise<Object>} Validation result object
 * 
 * @description Server-side validation of booking data.
 * Returns structured success/error responses for client-side handling.
 * 
 * @example
 * // Client-side usage
 * const result = await formEntry(formData);
 * if (result.success) {
 *   // Proceed with booking
 * } else {
 *   // Display validation errors
 * }
 */
export async function formEntry(data: BookingInput){
    const result = bookingSchema.safeParse(data)

    if(result.success){
        return { success: true, data: result.data }
    }

    if(result.error){
        return { success: false, errors: result.error.format() }
    }
}

/**
 * Resend email client initialization
 * Uses API key from environment variables for secure email sending
 */
const resend = new Resend(process.env.RESEND_API_KEY)

// WhatsApp Helper Functions

/**
 * Formats Australian phone numbers for WhatsApp API
 * 
 * @function formatAustralianPhone
 * @param {string} phoneNumber - Raw phone number input
 * @returns {string} Formatted international phone number
 * 
 * @description Converts various Australian phone formats to international format:
 * - 04xx xxx xxx → 61xxxxxxxxx
 * - +61 xxxx xxxx → 61xxxxxxxxx
 * - 61 xxxx xxxx → 61xxxxxxxxx (already formatted)
 * 
 * Removes all non-digit characters before formatting.
 */
function formatAustralianPhone(phoneNumber: string): string {
  // Remove all non-digit characters
  let digits = phoneNumber.replace(/\D/g, '');
  
  // Handle Australian formats
  if (digits.startsWith('0')) {
    // 04xx xxx xxx -> 61xxxxxxxxx
    return '61' + digits.substring(1);
  } else if (digits.startsWith('61')) {
    // Already in international format
    return digits;
  } else if (digits.startsWith('+61')) {
    // Remove + sign
    return '61' + digits.substring(3);
  }
  
  // Return as-is (should be 61xxxxxxxxx)
  return digits;
}

/**
 * Converts service type codes to human-readable labels
 * 
 * @function getServiceTypeLabel
 * @param {string} serviceType - Service type code from booking form
 * @returns {string} Human-readable service type label
 * 
 * @description Maps internal service type codes to display-friendly labels
 * for use in notifications and user interfaces.
 */
function getServiceTypeLabel(serviceType: string): string {
  const labels: Record<string, string> = {
    'sedan': 'Sedan',
    'suv-5': 'SUV (5 Seater)',
    'suv-7': 'SUV (7 Seater)',
    'taxi-van-10': 'Taxi Van (10 Seater)',
    'wheelchair-van': 'Wheelchair Accessible Van',
    'parcel-delivery': 'Parcel Delivery'
  }
  return labels[serviceType] || serviceType
}

/**
 * Formats date in Australian format (DD/MM/YYYY)
 * 
 * @function formatAustralianDate
 * @param {string} dateStr - Date string to format
 * @returns {string} Date formatted as DD/MM/YYYY
 * 
 * @description Converts date strings to Australian format.
 * Handles various input formats and returns DD/MM/YYYY.
 */
function formatAustralianDate(dateStr: string): string {
  if (!dateStr) return '';
  
  try {
    // Try to parse the date
    const date = new Date(dateStr);
    if (isNaN(date.getTime())) {
      // If parsing fails, try to handle DD/MM/YYYY format
      const parts = dateStr.split('/');
      if (parts.length === 3) {
        // Already in DD/MM/YYYY format
        return dateStr;
      }
      return dateStr; // Return as-is if can't parse
    }
    
    // Format as DD/MM/YYYY
    return date.toLocaleDateString('en-AU', {
      day: '2-digit',
      month: '2-digit',
      year: 'numeric'
    }).replace(/\//g, '/');
  } catch {
    return dateStr; // Return as-is on error
  }
}

/**
 * Formats time in Australian 24-hour format (HH:mm)
 * 
 * @function formatAustralianTime
 * @param {string} timeStr - Time string to format
 * @returns {string} Time formatted as HH:mm
 * 
 * @description Ensures time is in 24-hour format (HH:mm).
 * Handles various time formats and converts to HH:mm.
 */
function formatAustralianTime(timeStr: string): string {
  if (!timeStr) return '';
  
  // If already in HH:mm format, return as-is
  if (/^\d{2}:\d{2}$/.test(timeStr)) {
    return timeStr;
  }
  
  // Try to parse other formats
  try {
    const date = new Date(`2000-01-01T${timeStr}`);
    if (!isNaN(date.getTime())) {
      return date.toLocaleTimeString('en-AU', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false
      });
    }
  } catch {
    // Continue to fallback
  }
  
  return timeStr; // Return as-is if can't parse
}

/**
 * Normalizes Melbourne airport addresses for driver clarity
 * 
 * @function normalizeAirportAddress
 * @param {string} address - Original address string
 * @returns {string} Normalized address for driver clarity
 * 
 * @description Detects Melbourne airport addresses and converts them
 * to a driver-friendly format. Specifically handles "Terminal, Melbourne 3045, Australia"
 * pattern and converts to "Departure Terminal, Melbourne Airport, Tullamarine".
 */
function normalizeAirportAddress(address: string): string {
  if (!address) return '';
  
  const lowerAddress = address.toLowerCase();
  
  // Check for Melbourne airport patterns
  if (lowerAddress.includes('terminal') && 
      (lowerAddress.includes('melbourne') || lowerAddress.includes('3045')) &&
      lowerAddress.includes('australia')) {
    return 'Departure Terminal, Melbourne Airport, Tullamarine';
  }
  
  // Check for other airport variations
  if (lowerAddress.includes('melbourne airport') || 
      lowerAddress.includes('tullamarine airport')) {
    // Ensure consistent formatting
    return address.replace(/melbourne\s+airport/i, 'Melbourne Airport')
                  .replace(/tullamarine\s+airport/i, 'Melbourne Airport, Tullamarine');
  }
  
  return address; // Return original if not an airport address
}

/**
 * Formats booking data into a structured WhatsApp message
 * 
 * @function formatBookingMessage
 * @param {BookingInput} booking - Validated booking data
 * @returns {string} Formatted WhatsApp message with emojis and structure
 * 
 * @description Creates a well-structured message for WhatsApp notifications
 * with clear sections for customer details, trip information, and timestamps.
 * Uses emojis for visual clarity and Australian date/time formatting.
 */
function formatBookingMessage(booking: BookingInput): string {
  const formattedDate = formatAustralianDate(booking.date);
  const formattedTime = formatAustralianTime(booking.time);
  const normalizedPickup = normalizeAirportAddress(booking.pickUpAddress);
  const normalizedDropoff = normalizeAirportAddress(booking.dropOffAddress);
  
  return `🚖 *NEW CAB BOOKING* 🚖

*Customer Details:*
👤 Name: ${booking.name}
📞 Phone: ${booking.phone}
📧 Email: ${booking.email || 'Not provided'}

*Trip Details:*
📍 Pickup: ${normalizedPickup}
🎯 Dropoff: ${normalizedDropoff}
📅 Date: ${formattedDate}
🕒 Time: ${formattedTime}
🚗 Service: ${getServiceTypeLabel(booking.serviceType)}

📝 Requests: ${booking.instruction || 'None'}


⏰ Submitted: ${new Date().toLocaleString('en-AU')}`;
}

/**
 * Sends a WhatsApp message using Green API
 * 
 * @async
 * @function sendWhatsAppMessage
 * @param {string} phoneNumber - Recipient phone number
 * @param {string} message - Message content to send
 * @returns {Promise<{success: boolean, messageId?: string}>} Send result
 * 
 * @description Internal function that handles the actual WhatsApp API call.
 * Formats phone numbers, constructs API URL from environment variables,
 * and handles API responses and errors.
 * 
 * @throws {Error} Logs API errors but returns failure object instead of throwing
 */
async function sendWhatsAppMessage(
  phoneNumber: string, 
  message: string
): Promise<{ success: boolean; messageId?: string }> {
  try {
    const formattedPhone = formatAustralianPhone(phoneNumber);

    const BASE_URL = process.env.GREEN_API_BASE_URL;
    const GREEN_API_URL = `${BASE_URL}${process.env.GREEN_API_ID_INSTANCE}/sendMessage/${process.env.GREEN_API_TOKEN_INSTANCE}`;
    
    const response = await axios.post(
      GREEN_API_URL,
      {
        chatId: `${formattedPhone}@c.us`,
        message: message
      }
    );

    return {
      success: true,
      messageId: response.data.idMessage
    };
  } catch (error: any) {
    console.error('WhatsApp send error:', error.response?.data || error.message);
    return { success: false };
  }
}

/**
 * Sends WhatsApp notifications for new bookings to configured recipients
 * 
 * @async
 * @function sendBookingWhatsApp
 * @param {BookingInput} booking - Validated booking data
 * @returns {Promise<{success: boolean, data?: any, error?: string}>} Send result
 * 
 * @description Main WhatsApp notification function that:
 * 1. Reads recipients from environment variable (comma-separated)
 * 2. Formats booking data into WhatsApp message
 * 3. Sends to all recipients sequentially
 * 4. Tracks success/failure counts
 * 5. Returns appropriate result based on delivery outcomes
 * 
 * Environment variable: WHATSAPP_RECIPIENTS (comma-separated phone numbers)
 */
export async function sendBookingWhatsApp(booking: BookingInput): Promise<{ success: boolean; data?: any; error?: string }> {
  
  const recipients = process.env.WHATSAPP_RECIPIENTS?.split(',').map(r => r.trim()) || [];

  
  if (recipients.length === 0) {
    return { success: false, error: 'No recipients configured' };
  }
  
  const message = formatBookingMessage(booking);
  
  let successCount = 0;
  let errorCount = 0;

  for (const recipient of recipients) {
    const result = await sendWhatsAppMessage(recipient.trim(), message);
    //console.log(`WhatsApp to ${recipient}: ${result.success ? '✓' : '✗'}`);
    
    if (result.success) {
      successCount++;
    } else {
      errorCount++;
    }
  }

  if (successCount > 0 && errorCount === 0) {
    return { success: true, data: { sentTo: successCount } };
  } else if (errorCount > 0) {
    return { success: false, error: `Failed to send to ${errorCount} recipient(s)` };
  }
  
  return { success: false, error: 'No recipients configured' };
}

/**
 * Sends email notification for new bookings using Resend
 * 
 * @async
 * @function sendEmail
 * @param {BookingInput} data - Booking form data
 * @returns {Promise<{success: boolean, data?: any, error?: any, errors?: any}>} Send result
 * 
 * @description Email notification function that:
 * 1. Validates booking data (server-side safety check)
 * 2. Sends email via Resend with both plain text and React email template
 * 3. Includes reply-to address for customer follow-up
 * 4. Handles errors gracefully with detailed error information
 * 
 * Uses React email component for rich HTML email and fallback text version.
 */
export async function sendEmail(data: BookingInput) {

    const result = bookingSchema.safeParse(data)

    if(result.success){
        const { name, email, phone, pickUpAddress, dropOffAddress, date, time, serviceType, instruction } = result.data

        try{
            // Format dates and addresses for email
            const formattedDate = formatAustralianDate(date || '');
            const formattedTime = formatAustralianTime(time || '');
            const normalizedPickup = normalizeAirportAddress(pickUpAddress);
            const normalizedDropoff = normalizeAirportAddress(dropOffAddress);
            
            const data = await resend.emails.send({
                from: 'Vic Cabs <booking@viccabs.com.au>',
                to: ['dee.taxis.au@gmail.com', 'admin@viccabs.com.au'],
                //cc: 'dee.taxis.au@gmail.com',
                reply_to: `${email}`,
                subject: 'New Booking',
                text: `Name: ${name} \n Email: ${email || 'Not provided'} \n Phone: ${phone} \n Pick Up Address: ${normalizedPickup} \n Drop Off Address: ${normalizedDropoff} \n Date: ${formattedDate} \n Time: ${formattedTime} \n Service Type: ${getServiceTypeLabel(serviceType)} \n Instruction: ${instruction || ''}`,
                react: BookingEmail({ 
                  name, 
                  email: email || 'Not provided', 
                  phone, 
                  pickUpAddress: normalizedPickup, 
                  dropOffAddress: normalizedDropoff, 
                  date: formattedDate, 
                  time: formattedTime, 
                  serviceType, 
                  instructions: instruction || '' 
                })
            })
            return { success: true, data }
        }
        catch(error){
            return { success: false, error }
        }
    }

    if(result.error){
        return { success: false, errors: result.error.format() }
    }
    
}