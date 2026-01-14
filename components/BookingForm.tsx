'use client'
import { useState } from 'react'
import { useForm, SubmitHandler, Controller } from 'react-hook-form'
import { type BookingInput, bookingSchema } from '@/models/Booking'
import { zodResolver } from '@hookform/resolvers/zod'
import { sendEmail, sendBookingWhatsApp } from '@/lib/_actions'
import { toast } from 'sonner'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Textarea } from '@/components/ui/textarea'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { Calendar } from '@/components/ui/calendar'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { TimePicker } from '@/components/ui/time-picker'
import { format } from 'date-fns'
import { CalendarIcon, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'

const serviceTypeOptions = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv-5', label: 'SUV (5 Seater)' },
  { value: 'suv-7', label: 'SUV (7 Seater)' },
  { value: 'taxi-van-10', label: 'Taxi Van (10 Seater)' },
  { value: 'wheelchair-van', label: 'Wheelchair Accessible Van' },
  { value: 'parcel-delivery', label: 'Parcel Delivery' },
]

function BookingForm() {
  const [data, setData] = useState<BookingInput>()
  const [selectedDate, setSelectedDate] = useState<Date>()
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false)

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
          {/* Two-column grid for form fields */}
          <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 overflow-visible'>
            {/* Name Field */}
            <div className='space-y-2'>
              <Label htmlFor='name' className='text-base md:text-lg font-medium text-gray-300'>
                Name <span className='text-red-500'>*</span>
              </Label>
              <Input 
                type='text' 
                id='name' 
                {...register('name')} 
                placeholder='Enter your full name' 
                className='bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
              />
              {errors.name && (
                <p className='text-red-500 text-sm mt-1'>{errors.name.message}</p>
              )}
            </div>

            {/* Email Field */}
            <div className='space-y-2'>
              <Label htmlFor='email' className='text-base md:text-lg font-medium text-gray-300'>
                Email <span className='text-red-500'>*</span>
              </Label>
              <Input 
                type='email' 
                id='email' 
                {...register('email')} 
                placeholder='your.email@example.com' 
                className='bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
              />
              {errors.email && (
                <p className='text-red-500 text-sm mt-1'>{errors.email.message}</p>
              )}
            </div>

            {/* Phone Field */}
            <div className='space-y-2'>
              <Label htmlFor='phone' className='text-base md:text-lg font-medium text-gray-300'>
                Phone <span className='text-red-500'>*</span>
              </Label>
              <Input 
                type='tel' 
                id='phone' 
                {...register('phone')} 
                placeholder='0412345678' 
                className='bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
              />
              {errors.phone && (
                <p className='text-red-500 text-sm mt-1'>{errors.phone.message}</p>
              )}
            </div>

            {/* Service Type Field */}
            <div className='space-y-2'>
              <Label htmlFor='serviceType' className='text-base md:text-lg font-medium text-gray-300'>
                Service Type <span className='text-red-500'>*</span>
              </Label>
              <Select 
                defaultValue='sedan'
                onValueChange={(value) => setValue('serviceType', value as any)}
              >
                <SelectTrigger className='bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'>
                  <SelectValue placeholder='Select service type' />
                </SelectTrigger>
                <SelectContent>
                  {serviceTypeOptions.map((option) => (
                    <SelectItem key={option.value} value={option.value}>
                      {option.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
              {errors.serviceType && (
                <p className='text-red-500 text-sm mt-1'>{errors.serviceType.message}</p>
              )}
            </div>

            {/* Date Picker Field */}
            <div className='space-y-2'>
              <Label className='text-base md:text-lg font-medium text-gray-300'>
                Date of Pickup <span className='text-red-500'>*</span>
              </Label>
              <Controller
                control={control}
                name='date'
                render={({ field }) => (
                  <Popover open={isDatePickerOpen} onOpenChange={setIsDatePickerOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className={cn(
                          'w-full justify-start text-left font-normal bg-white text-black border-gray-300 hover:bg-gray-50',
                          !field.value && 'text-gray-500'
                        )}
                      >
                        <CalendarIcon className='mr-2 h-4 w-4' />
                        {field.value ? (
                          format(new Date(field.value), 'PPP')
                        ) : (
                          <span>Pick a date</span>
                        )}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <Calendar
                        mode='single'
                        selected={field.value ? new Date(field.value) : undefined}
                        onSelect={(date) => {
                          if (date) {
                            field.onChange(format(date, 'yyyy-MM-dd'))
                            setSelectedDate(date)
                            setIsDatePickerOpen(false)
                          }
                        }}
                        disabled={(date) =>
                          date < new Date(new Date().setHours(0, 0, 0, 0))
                        }
                        initialFocus
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.date && (
                <p className='text-red-500 text-sm mt-1'>{errors.date.message}</p>
              )}
            </div>

            {/* Time Picker Field */}
            <div className='space-y-2'>
              <Label className='text-base md:text-lg font-medium text-gray-300'>
                Pickup Time <span className='text-red-500'>*</span>
              </Label>
              <Controller
                control={control}
                name='time'
                render={({ field }) => (
                  <Popover open={isTimePickerOpen} onOpenChange={setIsTimePickerOpen}>
                    <PopoverTrigger asChild>
                      <Button
                        variant='outline'
                        className={cn(
                          'w-full justify-start text-left font-normal bg-white text-black border-gray-300 hover:bg-gray-50',
                          !field.value && 'text-gray-500'
                        )}
                      >
                        <Clock className='mr-2 h-4 w-4' />
                        {field.value || 'Pick a time'}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className='w-auto p-0' align='start'>
                      <TimePicker
                        value={field.value}
                        onChange={field.onChange}
                        onComplete={() => setIsTimePickerOpen(false)}
                      />
                    </PopoverContent>
                  </Popover>
                )}
              />
              {errors.time && (
                <p className='text-red-500 text-sm mt-1'>{errors.time.message}</p>
              )}
            </div>
          </div>

          {/* Full-width fields */}
          <div className='space-y-6'>
            {/* Pickup Address Field */}
            <div className='space-y-2'>
              <Label htmlFor='pickUpAddress' className='text-base md:text-lg font-medium text-gray-300'>
                Pickup Address <span className='text-red-500'>*</span>
              </Label>
              <Input 
                type='text' 
                id='pickUpAddress' 
                {...register('pickUpAddress')} 
                placeholder='Enter pickup location' 
                className='bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
              />
              {errors.pickUpAddress && (
                <p className='text-red-500 text-sm mt-1'>{errors.pickUpAddress.message}</p>
              )}
            </div>

            {/* Dropoff Address Field */}
            <div className='space-y-2'>
              <Label htmlFor='dropOffAddress' className='text-base md:text-lg font-medium text-gray-300'>
                Dropoff Address <span className='text-red-500'>*</span>
              </Label>
              <Input 
                type='text' 
                id='dropOffAddress' 
                {...register('dropOffAddress')} 
                placeholder='Enter destination' 
                className='bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-indigo-500'
              />
              {errors.dropOffAddress && (
                <p className='text-red-500 text-sm mt-1'>{errors.dropOffAddress.message}</p>
              )}
            </div>

            {/* Instruction Field */}
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
