'use client'
import { Controller } from 'react-hook-form'
import { AddressAutocomplete } from './AddressAutocomplete'
import { AddressFieldsProps } from './types'

export function AddressFields({ control, errors }: AddressFieldsProps) {
  return (
    <div className='space-y-6'>
      {/* Pickup Address Field */}
      <Controller
        control={control}
        name='pickUpAddress'
        render={({ field }) => (
          <AddressAutocomplete
            id='pickUpAddress'
            label='Pickup Address'
            placeholder='Enter pickup location'
            value={field.value || ''}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={errors.pickUpAddress?.message}
          />
        )}
      />

      {/* Dropoff Address Field */}
      <Controller
        control={control}
        name='dropOffAddress'
        render={({ field }) => (
          <AddressAutocomplete
            id='dropOffAddress'
            label='Dropoff Address'
            placeholder='Enter destination'
            value={field.value || ''}
            onChange={field.onChange}
            onBlur={field.onBlur}
            error={errors.dropOffAddress?.message}
          />
        )}
      />
    </div>
  )
}
