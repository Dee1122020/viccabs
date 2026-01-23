/**
 * @file Booking form component for Vic Cabs taxi service
 * @module components/BookingForm
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description Main booking form component with comprehensive validation,
 * real-time form state management, and dual notification system (email + WhatsApp).
 * Integrates with React Hook Form for form handling and Zod for schema validation.
 * 
 * @exports {React.Component} BookingForm - The booking form component
 */

'use client'

import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { useRouter } from 'next/navigation'
import { format } from 'date-fns'
import { type BookingInput, bookingSchema } from '@/models/Booking'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail, sendBookingWhatsApp } from '@/lib/_actions'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { PersonalInfoFields, AddressFields, DateTimeFields } from '@/components/form'

/**
 * BookingForm - Main booking form component
 * 
 * @component
 * @returns {JSX.Element} The complete booking form with all fields
 * 
 * @description Handles taxi booking submissions with:
 * - Real-time form validation using Zod schemas
 * - React Hook Form for state management
 * - Dual notification system (email + WhatsApp)
 * - Comprehensive error handling and user feedback
 * - Modular form field components for maintainability
 * 
 * @state {BookingInput | undefined} data - Stores submitted form data for debugging
 * 
 * @example
 * // Usage in a page component
 * <BookingForm />
 */
function BookingForm() {
  /**
   * State for storing submitted form data
   * Used primarily for debugging and development purposes
   */
  const [data, setData] = useState<BookingInput>()

  /**
   * React Hook Form configuration
   * 
   * @constant {Object} form - Form instance with methods and state
   * @property {Function} register - Registers input fields with validation
   * @property {Function} handleSubmit - Handles form submission
   * @property {Function} watch - Watches field values for real-time updates
   * @property {Function} setValue - Programmatically sets field values
   * @property {Object} control - Controller for complex form components
   * @property {Object} formState - Current form state including errors and submission status
   * @property {Function} reset - Resets form to initial state
   */
  const { 
    register, 
    handleSubmit, 
    watch, 
    setValue,
    control,
    formState: { errors, isSubmitting }, 
    reset 
  } = useForm<BookingInput>({
    defaultValues: {
      serviceType: 'sedan',
      date: format(new Date(), 'dd/MM/yyyy'),
      time: format(new Date(), 'hh:mm a') // 12-hour format with AM/PM
    },
    resolver: zodResolver(bookingSchema)
  })

  /**
   * Next.js router for client-side navigation
   */
  const router = useRouter()

  /**
   * Form submission handler
   * 
   * @async
   * @function onSubmit
   * @param {BookingInput} data - Validated form data
   * @returns {Promise<void>}
   * 
   * @description Processes form submission by:
   * 1. Sending email and WhatsApp notifications in parallel (for speed)
   * 2. Using Promise.allSettled for graceful failure handling
   * 3. Succeeding if at least one notification works
   * 4. Redirecting to thank you page on successful submission
   * 5. Providing detailed error logging for debugging
   * 
   * @throws {Error} Logs errors to console but handles gracefully for users
   */
  const onSubmit: SubmitHandler<BookingInput> = async (data) => {
    const submitStartTime = Date.now();
    
    try {
      console.log('⏱️ Starting booking submission...');
      
      // Send notifications through both channels in parallel with Promise.allSettled
      // This ensures one failure doesn't block the other, and both complete faster
      const [resultEmail, resultWhatsApp] = await Promise.allSettled([
        sendEmail(data),
        sendBookingWhatsApp(data)
      ]);
      
      const totalDuration = Date.now() - submitStartTime;
      console.log(`⏱️ Total submission time: ${totalDuration}ms`);
  
      // Extract results from Promise.allSettled
      const emailSuccess = resultEmail.status === 'fulfilled' && resultEmail.value?.success;
      const whatsAppSuccess = resultWhatsApp.status === 'fulfilled' && resultWhatsApp.value?.success;
      
      // Success if at least ONE notification worked (graceful degradation)
      if (emailSuccess || whatsAppSuccess) {
        if (emailSuccess && whatsAppSuccess) {
          console.log('✓ Both notifications sent successfully');
        } else if (emailSuccess) {
          console.warn('⚠️ Email sent, WhatsApp failed');
        } else {
          console.warn('⚠️ WhatsApp sent, Email failed');
        }
        
        toast.success('Booking request sent successfully!')
        
        // Build URL parameters for thank you page
        const params = new URLSearchParams({
          name: data.name,
          date: data.date || '',
          time: data.time || ''
        }).toString()
        
        // Redirect to thank you page with booking details
        router.push(`/pages/thank-you?${params}`)
        return
      }
  
      // Both notifications failed
      console.error('✗ Both notifications failed');
      
      if (resultEmail.status === 'fulfilled') {
        console.error('Email error:', resultEmail.value?.error || resultEmail.value?.errors)
      } else {
        console.error('Email rejected:', resultEmail.reason)
      }
      
      if (resultWhatsApp.status === 'fulfilled') {
        console.error('WhatsApp error:', resultWhatsApp.value?.error)
      } else {
        console.error('WhatsApp rejected:', resultWhatsApp.reason)
      }
      
      // User-friendly error message
      toast.error('Something went wrong! Please try again or call us directly.')
      
    } catch (error) {
      // Catch unexpected errors during submission
      const totalDuration = Date.now() - submitStartTime;
      console.error(`✗ Unexpected error after ${totalDuration}ms:`, error)
      toast.error('An unexpected error occurred!')
    }
  }

  return (
    <div className='flex flex-col py-4 mb-4 w-full px-4 mx-auto overflow-visible'>
      <div className='mt-2 w-full mx-auto overflow-visible'>
        {/* 
          Main form element with React Hook Form integration
          Uses vertical spacing for better visual separation
        */}
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 overflow-visible'>
          {/* 
            Personal Information Section
            Modular component for name, email, phone, and service type
          */}
          <PersonalInfoFields 
            register={register}
            errors={errors}
            setValue={setValue}
          />

          {/* 
            Date and Time Section
            Calendar and time picker components for scheduling
          */}
          <DateTimeFields 
            control={control}
            errors={errors}
          />

          {/* 
            Address Section
            Mapbox-powered address autocomplete for pickup/dropoff
          */}
          <AddressFields 
            control={control}
            errors={errors}
          />

          {/* 
            Special Instructions Section
            Optional text area for additional requests or notes
          */}
          <div className='space-y-2'>
            <Label htmlFor='instruction' className='text-base md:text-lg font-medium text-gray-300'>
              Special Instructions
            </Label>
            <Textarea 
              id='instruction' 
              {...register('instruction')} 
              placeholder='Any special requests or instructions...' 
              className='bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 min-h-[100px]'
            />
            {errors.instruction && (
              <p className='text-red-500 text-sm mt-1'>{errors.instruction.message}</p>
            )}
          </div>

          {/* 
            Submit Button
            Primary call-to-action with loading state
            Disabled during submission to prevent duplicate requests
          */}
          <div className='flex justify-center pt-4'>
            <Button 
              type='submit' 
              disabled={isSubmitting} 
              className='w-full md:w-1/2 bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-6 text-lg disabled:opacity-50 disabled:cursor-not-allowed transition-colors'
            >
              {isSubmitting ? 'Booking...' : 'Book Now'}
            </Button>
          </div>
        </form>
      </div>
    </div>
  )
}

export default BookingForm
