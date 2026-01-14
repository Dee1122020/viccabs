'use client'
import { useState, useEffect, useRef } from 'react'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { MapPin, Loader2 } from 'lucide-react'
import { AddressAutocompleteProps, SearchBoxSuggestion, SearchBoxSuggestResponse, SearchBoxRetrieveResponse } from './types'

export function AddressAutocomplete({
  value,
  onChange,
  onBlur,
  label,
  placeholder,
  error,
  id,
}: AddressAutocompleteProps) {
  const [suggestions, setSuggestions] = useState<SearchBoxSuggestion[]>([])
  const [isLoading, setIsLoading] = useState(false)
  const [showSuggestions, setShowSuggestions] = useState(false)
  const [inputValue, setInputValue] = useState(value)
  const wrapperRef = useRef<HTMLDivElement>(null)
  const debounceTimer = useRef<NodeJS.Timeout>()

  // Handle click outside to close suggestions
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (wrapperRef.current && !wrapperRef.current.contains(event.target as Node)) {
        setShowSuggestions(false)
      }
    }

    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  // Sync external value changes
  useEffect(() => {
    setInputValue(value)
  }, [value])

  // Debounced search function using Search Box API /suggest endpoint
  const searchAddress = async (query: string) => {
    if (!query || query.length < 3) {
      setSuggestions([])
      setIsLoading(false)
      return
    }

    setIsLoading(true)

    try {
      const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
      const sessionToken = process.env.NEXT_PUBLIC_MAPBOX_SESSION_TOKEN
      
      // Using Mapbox Search Box API /suggest endpoint
      const response = await fetch(
        `https://api.mapbox.com/search/searchbox/v1/suggest?q=${encodeURIComponent(query)}&access_token=${token}&session_token=${sessionToken}&language=en&country=AU&proximity=144.9631,-37.8136&limit=5&types=address,poi,place`
      )

      if (!response.ok) {
        throw new Error('Failed to fetch suggestions')
      }

      const data: SearchBoxSuggestResponse = await response.json()
      setSuggestions(data.suggestions)
      setShowSuggestions(true)
    } catch (error) {
      console.error('Error fetching address suggestions:', error)
      setSuggestions([])
    } finally {
      setIsLoading(false)
    }
  }

  // Handle input change with debouncing
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newValue = e.target.value
    setInputValue(newValue)
    onChange(newValue)

    // Clear existing timer
    if (debounceTimer.current) {
      clearTimeout(debounceTimer.current)
    }

    // Set new timer
    debounceTimer.current = setTimeout(() => {
      searchAddress(newValue)
    }, 300)
  }

  // Handle suggestion selection - retrieve full details using /retrieve endpoint
  const handleSuggestionClick = async (suggestion: SearchBoxSuggestion) => {
    try {
      const token = process.env.NEXT_PUBLIC_MAPBOX_ACCESS_TOKEN
      const sessionToken = process.env.NEXT_PUBLIC_MAPBOX_SESSION_TOKEN
      
      // Call /retrieve endpoint to get full address details
      const response = await fetch(
        `https://api.mapbox.com/search/searchbox/v1/retrieve/${encodeURIComponent(suggestion.mapbox_id)}?access_token=${token}&session_token=${sessionToken}`
      )

      if (!response.ok) {
        throw new Error('Failed to retrieve address details')
      }

      const data: SearchBoxRetrieveResponse = await response.json()
      
      // Use full_address from the retrieve response
      const fullAddress = data.features[0]?.properties?.full_address || 
                         data.features[0]?.properties?.place_formatted || 
                         suggestion.name
      
      setInputValue(fullAddress)
      onChange(fullAddress)
      setSuggestions([])
      setShowSuggestions(false)
    } catch (error) {
      console.error('Error retrieving address details:', error)
      
      // Fallback to suggestion name if retrieve fails
      const fallbackAddress = suggestion.full_address || 
                             suggestion.place_formatted || 
                             suggestion.name
      setInputValue(fallbackAddress)
      onChange(fallbackAddress)
      setSuggestions([])
      setShowSuggestions(false)
    }
  }

  // Handle keyboard navigation
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Escape') {
      setShowSuggestions(false)
    }
  }

  return (
    <div className='space-y-2' ref={wrapperRef}>
      <Label htmlFor={id} className='text-base md:text-lg font-medium text-gray-300'>
        {label} <span className='text-red-500'>*</span>
      </Label>
      
      <div className='relative'>
        <div className='relative'>
          <Input
            type='text'
            id={id}
            value={inputValue}
            onChange={handleInputChange}
            onBlur={onBlur}
            onKeyDown={handleKeyDown}
            onFocus={() => {
              if (suggestions.length > 0) {
                setShowSuggestions(true)
              }
            }}
            placeholder={placeholder}
            className='bg-white text-black border-gray-300 focus:border-indigo-500 focus:ring-indigo-500 pr-10'
            autoComplete='off'
          />
          {isLoading && (
            <div className='absolute right-3 top-1/2 -translate-y-1/2'>
              <Loader2 className='h-4 w-4 animate-spin text-gray-400' />
            </div>
          )}
        </div>

        {/* Suggestions Dropdown */}
        {showSuggestions && suggestions.length > 0 && (
          <div className='absolute z-50 w-full mt-1 bg-white border border-gray-300 rounded-md shadow-lg max-h-60 overflow-y-auto'>
            {suggestions.map((suggestion) => (
              <button
                key={suggestion.mapbox_id}
                type='button'
                onClick={() => handleSuggestionClick(suggestion)}
                className='w-full px-4 py-3 text-left hover:bg-gray-100 focus:bg-gray-100 focus:outline-none transition-colors border-b border-gray-100 last:border-b-0'
              >
                <div className='flex items-start gap-2'>
                  <MapPin className='h-4 w-4 mt-1 text-indigo-600 flex-shrink-0' />
                  <div className='flex-1 min-w-0'>
                    <p className='text-sm font-medium text-gray-900 truncate'>
                      {suggestion.name}
                    </p>
                    <p className='text-xs text-gray-600 truncate'>
                      {suggestion.full_address || suggestion.place_formatted || suggestion.address}
                    </p>
                  </div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>

      {error && <p className='text-red-500 text-sm mt-1'>{error}</p>}
    </div>
  )
}
