'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { type BookingInput, bookingSchema } from '@/models/Booking'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail, sendBookingWhatsApp } from '@/lib/_actions'
import { toast } from 'sonner'

function BookingForm() {
  const [data, setData] = useState<BookingInput>()

  const { register, handleSubmit, watch, formState:{ errors, isSubmitting}, reset,} = useForm<BookingInput>({defaultValues: {
    people: 1,
      
  },
  resolver: zodResolver(bookingSchema)})

  const onSubmit: SubmitHandler<BookingInput> = async (data) => {
    try {
      const resultEmail = await sendEmail(data)
      const resultWhatsApp = await sendBookingWhatsApp(data)
  
      if (resultEmail?.success && resultWhatsApp?.success){
        console.log({data: resultEmail.data, whatsApp: resultWhatsApp.data})
        toast.success('Booking request sent successfully!')
        reset()  
        return
      }
  
      // Check for specific error cases
      if (!resultEmail?.success) {
        console.error('Email error:', resultEmail?.error || resultEmail?.errors)
      }
      
      if (!resultWhatsApp?.success) {
        console.error('WhatsApp error:', resultWhatsApp?.error)
      }
      
      toast.error('Something went wrong!')
      
    } catch (error) {
      console.error('Unexpected error:', error)
      toast.error('An unexpected error occurred!')
    }
  }

  return (
    <div className='flex flex-col py-4 mb-4 w-full px-4 md:w-4/5 lg:w-3/5 mx-auto'>
      <div className='mt-2 w-full md:w-3/4 md:mx-auto'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-3 md:gap-y-2'>

          <label htmlFor='name' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>Name</label>
          <input type='text' id='name' {...register('name')} placeholder='Name' className='px-4 py-3 rounded text-base md:py-2' />
          {errors.name && <span className='text-red-500 text-sm'>{errors.name.message}</span>}

          <label htmlFor='email' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>Email</label>
          <input type='email' id='email' {...register('email')} placeholder='Email address' className='px-4 py-3 rounded text-base md:py-2'/>
          {errors.email && <span className='text-red-500 text-sm'>{errors.email.message}</span>}

          <label htmlFor='phone' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>Phone</label>
          <input type='text' id='phone' {...register('phone')} placeholder='Phone number' className='px-4 py-3 rounded text-base md:py-2'/>
          {errors.phone && <span className='text-red-500 text-sm'>{errors.phone.message}</span>}

          <label htmlFor='pickUpAddress' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>Pickup Address</label>
          <input type='text' id='pickUpAddress' {...register('pickUpAddress')} placeholder='Pickup Address' className='px-4 py-3 rounded text-base md:py-2'/>
          {errors.pickUpAddress && <span className='text-red-500 text-sm'>{errors.pickUpAddress.message}</span>}

          <label htmlFor='dropOffAddress' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>Dropoff Address</label>
          <input type='text' id='dropOffAddress' {...register('dropOffAddress')} placeholder='Dropoff Address' className='px-4 py-3 rounded text-base md:py-2'/>
          {errors.dropOffAddress && <span className='text-red-500 text-sm'>{errors.dropOffAddress.message}</span>}

          <label htmlFor='date' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>Date of Pickup</label>
          <input type='date' id='date' {...register('date')} placeholder='Date of pickup' className='px-4 py-3 rounded text-base md:py-2'/>
          {errors.date && <span className='text-red-500 text-sm'>{errors.date.message}</span>}

          <label htmlFor='time' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>Pickup Time</label>
          <input type='time' id='time' {...register('time')} placeholder='Pickup time' className='px-4 py-3 rounded text-base md:py-2'/>
          {errors.time && <span className='text-red-500 text-sm'>{errors.time.message}</span>}

          <label htmlFor='people' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>People</label>
          <input type='number' id='people' {...register('people', {valueAsNumber: true})} placeholder='Number of people' className='px-4 py-3 rounded text-base md:py-2'/>
          {errors.people && <span className='text-red-500 text-sm'>{errors.people.message}</span>}

          <label htmlFor='instruction' className='text-base font-medium mb-1 mt-2 md:text-lg lg:text-2xl'>Instruction</label>
          <textarea id='instruction' {...register('instruction')} placeholder='instruction' className='px-4 py-3 rounded mb-2 text-base md:py-2'/>
          {errors.instruction && <span className='text-red-500 text-sm'>{errors.instruction.message}</span>}

          <button type='submit' disabled={isSubmitting} className='rounded-lg border border-none bg-slate-600 py-3 px-6 font-medium text-white transition-colors hover:bg-slate-400/80 disabled:cursor-not-allowed disabled:opacity-50 w-full md:w-1/2 mx-auto min-h-[44px] mt-4'
          >{isSubmitting ? 'Booking...' : 'Book Now'}</button>
        </form>
      </div>

    </div>
  )
}

export default BookingForm