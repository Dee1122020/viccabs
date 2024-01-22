import { z } from "zod"

export const bookingSchema = z.object({
    name: z.string().min(3, "Name must be at least 3 characters long").max(50),
    email: z.string().email(),
    phone: z.string().min(10, "Phone must be at least 6 characters long"),
    pickUpAddress: z.string().min(3, "Address must be at least 3 characters long"),
    dropOffAddress: z.string().min(3, "Address must be at least 3 characters long"),
    date: z.string(),
    time: z.string(),
    people: z.string(),
    instruction: z.string().optional(),
})

export type BookingInput = z.infer<typeof bookingSchema>