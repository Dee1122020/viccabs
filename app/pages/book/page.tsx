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
        <BookingForm />
    </div>
  )
}

export default page