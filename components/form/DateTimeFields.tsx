'use client'
import { useState } from 'react'
import { Controller } from 'react-hook-form'
import { Button } from '@/components/ui/button'
import { Label } from '@/components/ui/label'
import { Calendar } from '@/components/ui/calendar'
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover'
import { TimePicker } from '@/components/ui/time-picker'
import { format, parse } from 'date-fns'
import { CalendarIcon, Clock } from 'lucide-react'
import { cn } from '@/lib/utils'
import { DateTimeFieldsProps } from './types'

/**
 * Parses Australian date string (DD/MM/YYYY) to Date object
 */
function parseAustralianDate(dateStr: string): Date | undefined {
  if (!dateStr) return undefined;
  
  try {
    // Try to parse as DD/MM/YYYY
    return parse(dateStr, 'dd/MM/yyyy', new Date());
  } catch {
    // Fallback to default Date parsing
    const date = new Date(dateStr);
    return isNaN(date.getTime()) ? undefined : date;
  }
}

export function DateTimeFields({ control, errors }: DateTimeFieldsProps) {
  const [isDatePickerOpen, setIsDatePickerOpen] = useState(false)
  const [isTimePickerOpen, setIsTimePickerOpen] = useState(false)
  const [selectedDate, setSelectedDate] = useState<Date>()

  return (
    <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6'>
      {/* Date Picker Field */}
      <div className='space-y-2'>
        <Label className='text-base md:text-lg font-medium text-gray-300'>
          Date of Pickup <span className='text-red-500'>*</span>
        </Label>
        <Controller
          control={control}
          name='date'
          render={({ field }) => {
            const parsedDate = field.value ? parseAustralianDate(field.value) : undefined;
            
            return (
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
                    {parsedDate ? (
                      format(parsedDate, 'PPP')
                    ) : (
                      <span>Pick a date</span>
                    )}
                  </Button>
                </PopoverTrigger>
                <PopoverContent className='w-auto p-0' align='start'>
                  <Calendar
                    mode='single'
                    selected={parsedDate}
                    onSelect={(date) => {
                      if (date) {
                        field.onChange(format(date, 'dd/MM/yyyy'))
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
            );
          }}
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
  )
}
