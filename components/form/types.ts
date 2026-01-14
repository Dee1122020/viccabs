import { Control, FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { BookingInput } from '@/models/Booking'

// Mapbox Search Box API Types
export interface SearchBoxSuggestion {
  name: string
  mapbox_id: string
  feature_type: string
  address?: string
  full_address?: string
  place_formatted?: string
  context?: {
    country?: { name: string; country_code: string }
    region?: { name: string; region_code: string }
    postcode?: { name: string }
    district?: { name: string }
    place?: { name: string }
    locality?: { name: string }
    neighborhood?: { name: string }
    street?: { name: string }
    address?: { name: string; address_number?: string; street_name?: string }
  }
  language?: string
  maki?: string
  poi_category?: string[]
  poi_category_ids?: string[]
  external_ids?: Record<string, any>
  metadata?: Record<string, any>
  distance?: number
}

export interface SearchBoxSuggestResponse {
  suggestions: SearchBoxSuggestion[]
  attribution: string
  url?: string
}

export interface SearchBoxRetrieveResponse {
  type: string
  features: Array<{
    type: string
    geometry: {
      type: string
      coordinates: [number, number]
    }
    properties: {
      name: string
      mapbox_id: string
      feature_type: string
      address?: string
      full_address?: string
      place_formatted?: string
      context?: SearchBoxSuggestion['context']
      coordinates?: {
        latitude: number
        longitude: number
        accuracy?: string
        routable_points?: Array<{
          name: string
          latitude: number
          longitude: number
        }>
      }
      language?: string
      maki?: string
      metadata?: Record<string, any>
    }
  }>
  attribution: string
}

// Form Component Props
export interface PersonalInfoFieldsProps {
  register: UseFormRegister<BookingInput>
  errors: FieldErrors<BookingInput>
  setValue: UseFormSetValue<BookingInput>
}

export interface AddressFieldsProps {
  control: Control<BookingInput>
  errors: FieldErrors<BookingInput>
}

export interface DateTimeFieldsProps {
  control: Control<BookingInput>
  errors: FieldErrors<BookingInput>
}

export interface AddressAutocompleteProps {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  label: string
  placeholder: string
  error?: string
  id: string
}
