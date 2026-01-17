/**
 * @file Personal information form fields component
 * @module components/form/PersonalInfoFields
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description Component for personal information section of booking form.
 * Includes name, email, phone, and service type selection fields.
 * Integrates with React Hook Form for validation and state management.
 * 
 * @exports {React.Component} PersonalInfoFields - Personal info fields component
 */

'use client'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select'
import { PersonalInfoFieldsProps } from './types'

/**
 * Service type options for dropdown selection
 * Maps internal values to user-friendly labels
 */
const serviceTypeOptions = [
  { value: 'sedan', label: 'Sedan' },
  { value: 'suv-5', label: 'SUV (5 Seater)' },
  { value: 'suv-7', label: 'SUV (7 Seater)' },
  { value: 'taxi-van-10', label: 'Taxi Van (10 Seater)' },
  { value: 'wheelchair-van', label: 'Wheelchair Accessible Van' },
  { value: 'parcel-delivery', label: 'Parcel Delivery' },
]

/**
 * PersonalInfoFields - Component for personal information form section
 * 
 * @component
 * @param {PersonalInfoFieldsProps} props - Component properties
 * @param {UseFormRegister<BookingInput>} props.register - React Hook Form register function
 * @param {FieldErrors<BookingInput>} props.errors - Form validation errors
 * @param {UseFormSetValue<BookingInput>} props.setValue - Function to set form values
 * @returns {JSX.Element} Personal information form fields
 * 
 * @description Renders the personal information section of the booking form:
 * - Name field (required)
 * - Email field (required, email validation)
 * - Phone field (required, 10-digit Australian format)
 * - Service type dropdown (required)
 * 
 * Uses responsive grid layout (1 column mobile, 2 columns desktop)
 * Displays validation errors below each field
 * 
 * @example
 * <PersonalInfoFields 
 *   register={register}
 *   errors={errors}
 *   setValue={setValue}
 * />
 */
export function PersonalInfoFields({ register, errors, setValue }: PersonalInfoFieldsProps) {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
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
          Email
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
    </div>
  )
}
