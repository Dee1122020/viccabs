import BookingForm from '@/components/BookingForm'
import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'Book',
  description: 'Seamlessly book your Victoria Cabs experience online. Fill out the form for a personalized, luxury ride. Call 1300 121 213 for inquiries.',
  alternates: {
    canonical: '/pages/book',
  }
}

function page() {
  return (
    <div>
      <h2 className='text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3'>Booking Form</h2>
      <div className='mt-2 w-full md:w-3/4 md:mx-auto'>
        <BookingForm />
      </div>
    </div>
  )
}

export default page