import { z } from "zod"

export const bookingSchema = z.object({
    name: z.string().trim().min(3, "Name must be at least 3 characters long").max(50),
    email: z.string().email().trim().toLowerCase(),
    phone: z.string().regex(/^[0-9]+$/, { message: "Only numbers are allowed" }).length(10, { message: "Ten numbers are required" }),//.min(10, "Phone must be at least 6 characters long"),
    pickUpAddress: z.string().trim().min(3, "Address must be at least 3 characters long"),
    dropOffAddress: z.string().trim().min(3, "Address must be at least 3 characters long"),
    date: z.string().trim(),//.date().transform((value) => {new Date(value).toLocaleDateString()}),
    time: z.string().trim(),//.date().transform((value) => {new Date(value).toLocaleTimeString()}),
    people: z.number().positive({message:'Please enter a valid number!'}).int().gt(0, {message: 'Must be atleast 1 person'}).lte(10, {message: 'Maximum 10 people'}),//z.string().regex(/^[0-9]+$/, { message: "Only numbers are allowed" }).min(1, "People must be at least 1"),
    instruction: z.string().optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>