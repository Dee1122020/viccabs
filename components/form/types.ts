/**
 * @file Type definitions for form components and Mapbox API
 * @module components/form/types
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description TypeScript interfaces and type definitions for:
 * - Mapbox Search Box API responses
 * - Form component props for React Hook Form integration
 * - Address autocomplete component props
 * 
 * Provides type safety for form handling and external API integrations.
 * 
 * @exports {Interface} SearchBoxSuggestion - Mapbox suggestion type
 * @exports {Interface} SearchBoxSuggestResponse - Mapbox suggestions response
 * @exports {Interface} SearchBoxRetrieveResponse - Mapbox retrieve response
 * @exports {Interface} PersonalInfoFieldsProps - Personal info component props
 * @exports {Interface} AddressFieldsProps - Address fields component props
 * @exports {Interface} DateTimeFieldsProps - Date/time fields component props
 * @exports {Interface} AddressAutocompleteProps - Autocomplete component props
 */

import { Control, FieldErrors, UseFormRegister, UseFormSetValue } from 'react-hook-form'
import { BookingInput } from '@/models/Booking'

/**
 * Mapbox Search Box API suggestion interface
 * 
 * @interface SearchBoxSuggestion
 * @description Represents a single address suggestion from Mapbox API
 * Includes comprehensive location data for display and selection
 * 
 * @property {string} name - Display name of the location
 * @property {string} mapbox_id - Unique Mapbox identifier
 * @property {string} feature_type - Type of feature (address, poi, etc.)
 * @property {string} [address] - Street address
 * @property {string} [full_address] - Complete formatted address
 * @property {string} [place_formatted] - Formatted place name
 * @property {Object} [context] - Geographical context hierarchy
 * @property {Object} [context.country] - Country information
 * @property {Object} [context.region] - State/region information
 * @property {Object} [context.postcode] - Postal code
 * @property {Object} [context.district] - District information
 * @property {Object} [context.place] - City/town information
 * @property {Object} [context.locality] - Locality information
 * @property {Object} [context.neighborhood] - Neighborhood information
 * @property {Object} [context.street] - Street information
 * @property {Object} [context.address] - Detailed address components
 * @property {string} [language] - Language of the suggestion
 * @property {string} [maki] - Map icon identifier
 * @property {string[]} [poi_category] - Point of interest categories
 * @property {string[]} [poi_category_ids] - POI category IDs
 * @property {Record<string, any>} [external_ids] - External service IDs
 * @property {Record<string, any>} [metadata] - Additional metadata
 * @property {number} [distance] - Distance from search center in meters
 */
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

/**
 * Mapbox Search Box suggestions response interface
 * 
 * @interface SearchBoxSuggestResponse
 * @description Response format for Mapbox Search Box suggestions endpoint
 * 
 * @property {SearchBoxSuggestion[]} suggestions - Array of address suggestions
 * @property {string} attribution - Required attribution text for Mapbox
 * @property {string} [url] - URL to the Mapbox search results
 */
export interface SearchBoxSuggestResponse {
  suggestions: SearchBoxSuggestion[]
  attribution: string
  url?: string
}

/**
 * Mapbox Search Box retrieve response interface
 * 
 * @interface SearchBoxRetrieveResponse
 * @description Response format for retrieving detailed location information
 * Includes GeoJSON feature collection with geometry and properties
 * 
 * @property {string} type - GeoJSON type ("FeatureCollection")
 * @property {Array} features - Array of GeoJSON features
 * @property {string} features[].type - Feature type ("Feature")
 * @property {Object} features[].geometry - Geographic coordinates
 * @property {string} features[].geometry.type - Geometry type ("Point")
 * @property {[number, number]} features[].geometry.coordinates - [longitude, latitude]
 * @property {Object} features[].properties - Location properties
 * @property {string} attribution - Required attribution text for Mapbox
 */
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

/**
 * Props for PersonalInfoFields component
 * 
 * @interface PersonalInfoFieldsProps
 * @description Props required for personal information form fields
 * 
 * @property {UseFormRegister<BookingInput>} register - React Hook Form register function
 * @property {FieldErrors<BookingInput>} errors - Form validation errors
 * @property {UseFormSetValue<BookingInput>} setValue - Function to set form values programmatically
 */
export interface PersonalInfoFieldsProps {
  register: UseFormRegister<BookingInput>
  errors: FieldErrors<BookingInput>
  setValue: UseFormSetValue<BookingInput>
}

/**
 * Props for AddressFields component
 * 
 * @interface AddressFieldsProps
 * @description Props required for address form fields with Mapbox autocomplete
 * 
 * @property {Control<BookingInput>} control - React Hook Form control object
 * @property {FieldErrors<BookingInput>} errors - Form validation errors
 */
export interface AddressFieldsProps {
  control: Control<BookingInput>
  errors: FieldErrors<BookingInput>
}

/**
 * Props for DateTimeFields component
 * 
 * @interface DateTimeFieldsProps
 * @description Props required for date and time picker form fields
 * 
 * @property {Control<BookingInput>} control - React Hook Form control object
 * @property {FieldErrors<BookingInput>} errors - Form validation errors
 */
export interface DateTimeFieldsProps {
  control: Control<BookingInput>
  errors: FieldErrors<BookingInput>
}

/**
 * Props for AddressAutocomplete component
 * 
 * @interface AddressAutocompleteProps
 * @description Props for the Mapbox-powered address autocomplete input
 * 
 * @property {string} value - Current input value
 * @property {(value: string) => void} onChange - Callback when value changes
 * @property {() => void} [onBlur] - Optional blur handler
 * @property {string} label - Input label text
 * @property {string} placeholder - Input placeholder text
 * @property {string} [error] - Optional error message to display
 * @property {string} id - HTML id attribute for the input
 */
export interface AddressAutocompleteProps {
  value: string
  onChange: (value: string) => void
  onBlur?: () => void
  label: string
  placeholder: string
  error?: string
  id: string
}
