'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { type BookingInput, bookingSchema } from '@/models/Booking'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail } from '@/lib/_actions'
import { toast } from 'sonner'

function BookingForm() {
  const [data, setData] = useState<BookingInput>()

  const { register, handleSubmit, watch, formState:{ errors, isSubmitting}, reset,} = useForm<BookingInput>({resolver: zodResolver(bookingSchema)})

  const onSubmit: SubmitHandler<BookingInput> = async (data) => {
    const result = await sendEmail(data)

    if (result?.success){
      console.log({data: result.data})
      toast.success('Booking request sent successfully!')
      reset()  
      return
    }

    if (result?.error){
      console.log({error: result.error})
      toast.error('Something went wrong!')
      return
    }
  }

  return (
    <div className='flex flex-col py-4 mb-4 w-3/5 mx-auto'>
      <div><h2 className='text-2xl p-2 text-center'>BookingForm</h2></div>

      <div className='mb-2'>
        <form onSubmit={handleSubmit(onSubmit)} className='flex flex-col gap-y-2'>

          <label htmlFor='name'>Name</label>
          <input type='text' id='name' {...register('name')} placeholder='Name' className='px-4 py-2 rounded' />
          {errors.name && <span className='text-red-500'>{errors.name.message}</span>}

          <label htmlFor='email'>Email</label>
          <input type='email' id='email' {...register('email')} placeholder='Email' className='px-4 py-2 rounded'/>
          {errors.email && <span className='text-red-500'>{errors.email.message}</span>}

          <label htmlFor='phone'>Phone</label>
          <input type='text' id='phone' {...register('phone')} placeholder='Phone' className='px-4 py-2 rounded'/>
          {errors.phone && <span className='text-red-500'>{errors.phone.message}</span>}

          <label htmlFor='pickUpAddress'>Pickup Address</label>
          <input type='text' id='pickUpAddress' {...register('pickUpAddress')} placeholder='Pickup Address' className='px-4 py-2 rounded'/>
          {errors.pickUpAddress && <span className='text-red-500'>{errors.pickUpAddress.message}</span>}

          <label htmlFor='dropOffAddress'>Dropoff Address</label>
          <input type='text' id='dropOffAddress' {...register('dropOffAddress')} placeholder='Dropoff Address' className='px-4 py-2 rounded'/>
          {errors.dropOffAddress && <span className='text-red-500'>{errors.dropOffAddress.message}</span>}

          <label htmlFor='date'>Date</label>
          <input type='date' id='date' {...register('date')} placeholder='Date' className='px-4 py-2 rounded'/>
          {errors.date && <span className='text-red-500'>{errors.date.message}</span>}

          <label htmlFor='time'>Time</label>
          <input type='time' id='time' {...register('time')} placeholder='Time' className='px-4 py-2 rounded'/>
          {errors.time && <span className='text-red-500'>{errors.time.message}</span>}

          <label htmlFor='people'>People</label>
          <input type='number' id='people' {...register('people')} placeholder='Number of people' className='px-4 py-2 rounded'/>
          {errors.people && <span className='text-red-500'>{errors.people.message}</span>}

          <label htmlFor='instruction'>Instruction</label>
          <textarea id='instruction' {...register('instruction')} placeholder='instruction' className='px-4 py-2 rounded mb-2'/>
          {errors.instruction && <span className='text-red-500'>{errors.instruction.message}</span>}

          <button type='submit' disabled={isSubmitting} className='rounded-lg border border-none bg-slate-600 py-2.5 font-medium text-white transition-colors hover:bg-slate-400/80 disabled:cursor-not-allowed disabled:opacity-50 w-1/2 mx-auto'
          >{isSubmitting ? 'Submitting...' : 'Submit'}</button>
        </form>
      </div>

    </div>
  )
}

export default BookingForm