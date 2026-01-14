import { z } from "zod"

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

export type BookingInput = z.infer<typeof bookingSchema>