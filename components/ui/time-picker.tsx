'use client'

import * as React from 'react'
import { cn } from '@/lib/utils'

interface TimePickerProps {
  value?: string
  onChange?: (time: string) => void
  onComplete?: () => void
}

export function TimePicker({ value, onChange, onComplete }: TimePickerProps) {
  const [hours, setHours] = React.useState('12')
  const [minutes, setMinutes] = React.useState('00')
  const [period, setPeriod] = React.useState<'AM' | 'PM'>('AM')

  // Parse initial value
  React.useEffect(() => {
    if (value) {
      const [time, period] = value.split(' ')
      if (time) {
        const [h, m] = time.split(':')
        setHours(h || '12')
        setMinutes(m || '00')
        if (period) {
          setPeriod(period as 'AM' | 'PM')
        }
      }
    }
  }, [])

  // Update value when time changes
  React.useEffect(() => {
    const timeString = `${hours.padStart(2, '0')}:${minutes.padStart(2, '0')} ${period}`
    onChange?.(timeString)
  }, [hours, minutes, period, onChange])

  const hourOptions = Array.from({ length: 12 }, (_, i) => (i + 1).toString())
  const minuteOptions = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'))

  return (
    <div className='flex flex-col gap-3 p-4 bg-white rounded-md'>
      <div className='flex gap-2'>
        {/* Hours */}
        <div className='flex flex-col'>
          <label className='text-xs text-gray-600 mb-1 text-center'>Hour</label>
        <div className='h-40 w-16 overflow-y-auto border rounded-md bg-white'>
          {hourOptions.map((hour) => (
            <button
              key={hour}
              type='button'
              onClick={() => setHours(hour)}
              className={cn(
                'w-full px-3 py-2 text-sm hover:bg-gray-100 transition-colors',
                hours === hour && 'bg-indigo-600 text-white hover:bg-indigo-700'
              )}
            >
              {hour}
            </button>
          ))}
        </div>
      </div>

      {/* Minutes */}
      <div className='flex flex-col'>
        <label className='text-xs text-gray-600 mb-1 text-center'>Minute</label>
        <div className='h-40 w-16 overflow-y-auto border rounded-md bg-white'>
          {minuteOptions.map((minute) => (
            <button
              key={minute}
              type='button'
              onClick={() => setMinutes(minute)}
              className={cn(
                'w-full px-3 py-2 text-sm hover:bg-gray-100 transition-colors',
                minutes === minute && 'bg-indigo-600 text-white hover:bg-indigo-700'
              )}
            >
              {minute}
            </button>
          ))}
        </div>
      </div>

      {/* AM/PM */}
      <div className='flex flex-col'>
        <label className='text-xs text-gray-600 mb-1 text-center'>Period</label>
        <div className='h-40 w-16 border rounded-md bg-white flex flex-col'>
          <button
            type='button'
            onClick={() => setPeriod('AM')}
            className={cn(
              'flex-1 px-3 py-2 text-sm hover:bg-gray-100 transition-colors border-b',
              period === 'AM' && 'bg-indigo-600 text-white hover:bg-indigo-700'
            )}
          >
            AM
          </button>
          <button
            type='button'
            onClick={() => setPeriod('PM')}
            className={cn(
              'flex-1 px-3 py-2 text-sm hover:bg-gray-100 transition-colors',
              period === 'PM' && 'bg-indigo-600 text-white hover:bg-indigo-700'
            )}
          >
            PM
          </button>
        </div>
      </div>
      </div>
      
      {/* Done Button */}
      <button
        type='button'
        onClick={onComplete}
        className='w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2 px-4 rounded-md transition-colors'
      >
        Done
      </button>
    </div>
  )
}
