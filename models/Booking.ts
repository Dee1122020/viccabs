/**
 * @file Booking data model and validation schema
 * @module models/Booking
 * @author Vic Cabs
 * @date 2026-01-16
 * 
 * @description Defines the data structure and validation rules for taxi bookings.
 * Uses Zod for schema validation with TypeScript type inference.
 * This model ensures data consistency and validation across the application.
 * 
 * @exports {z.ZodObject} bookingSchema - Zod validation schema
 * @exports {BookingInput} BookingInput - TypeScript type derived from schema
 */

import { z } from "zod"

/**
 * Zod validation schema for booking form data
 * 
 * @constant {z.ZodObject}
 * @description Defines validation rules for all booking form fields:
 * - Name: 3-50 characters, trimmed
 * - Email: Valid email format, lowercase, trimmed
 * - Phone: Exactly 10 digits, numbers only (Australian format)
 * - Addresses: Minimum 3 characters, trimmed
 * - Date/Time: String values (format validated elsewhere)
 * - Service Type: Enum of available vehicle types
 * - Instructions: Optional additional notes
 * 
 * Each field includes appropriate error messages for user feedback.
 * 
 * @example
 * // Validating form data
 * const result = bookingSchema.safeParse(formData);
 * if (result.success) {
 *   // Data is valid
 * }
 */
export const bookingSchema = z.object({
    name: z.string().trim().min(3, "Name must be at least 3 characters long").max(50),
    email: z.string().email().trim().toLowerCase(),
    phone: z.string().regex(/^[0-9]+$/, { message: "Only numbers are allowed" }).length(10, { message: "Ten numbers are required" }),
    pickUpAddress: z.string().trim().min(3, "Address must be at least 3 characters long"),
    dropOffAddress: z.string().trim().min(3, "Address must be at least 3 characters long"),
    date: z.string().trim(),
    time: z.string().trim(),
    serviceType: z.enum(["sedan", "suv-5", "suv-7", "taxi-van-10", "wheelchair-van", "parcel-delivery"], {
        required_error: "Please select a service type",
    }),
    instruction: z.string().optional(),
})

/**
 * TypeScript type derived from the booking schema
 * 
 * @typedef {Object} BookingInput
 * @property {string} name - Customer's full name (3-50 characters)
 * @property {string} email - Valid email address
 * @property {string} phone - 10-digit Australian phone number
 * @property {string} pickUpAddress - Pickup location address
 * @property {string} dropOffAddress - Destination address
 * @property {string} date - Booking date (string format)
 * @property {string} time - Booking time (string format)
 * @property {"sedan"|"suv-5"|"suv-7"|"taxi-van-10"|"wheelchair-van"|"parcel-delivery"} serviceType - Type of vehicle/service
 * @property {string} [instruction] - Optional special instructions
 * 
 * @description Auto-generated TypeScript type that matches the Zod schema.
 * Provides type safety throughout the application for booking data.
 */
export type BookingInput = z.infer<typeof bookingSchema>