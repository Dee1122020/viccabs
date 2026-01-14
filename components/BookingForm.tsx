'use client'
import { useState } from 'react'
import { useForm, SubmitHandler } from 'react-hook-form'
import { type BookingInput, bookingSchema } from '@/models/Booking'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail, sendBookingWhatsApp } from '@/lib/_actions'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import { PersonalInfoFields, AddressFields, DateTimeFields } from '@/components/form'

function BookingForm() {
  const [data, setData] = useState<BookingInput>()

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
    },
    resolver: zodResolver(bookingSchema)
  })

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
    <div className='flex flex-col py-4 mb-4 w-full px-4 mx-auto overflow-visible'>
      <div className='mt-2 w-full mx-auto overflow-visible'>
        <form onSubmit={handleSubmit(onSubmit)} className='space-y-6 overflow-visible'>
          {/* Personal Information Section */}
          <PersonalInfoFields 
            register={register}
            errors={errors}
            setValue={setValue}
          />

          {/* Date and Time Section */}
          <DateTimeFields 
            control={control}
            errors={errors}
          />

          {/* Address Section */}
          <AddressFields 
            control={control}
            errors={errors}
          />

          {/* Special Instructions Section */}
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

          {/* Submit Button */}
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
