'use server'
import { z } from "zod"
import { BookingInput, bookingSchema } from "@/models/Booking"
import { Resend } from "resend"
import BookingEmail from "@/email/BookingEmail"

export async function formEntry(data: BookingInput){
    const result = bookingSchema.safeParse(data)

    if(result.success){
        return { success: true, data: result.data }
    }

    if(result.error){
        return { success: false, errors: result.error.format() }
    }
}

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendEmail(data: BookingInput) {

    const result = bookingSchema.safeParse(data)

    if(result.success){
        const { name, email, phone, pickUpAddress, dropOffAddress, date, time, people, instruction } = result.data

        try{
            const data = await resend.emails.send({
                from: 'onboarding@resend.dev',
                to: 'dee.taxis.au@gmail.com',
                //reply_to: '',
                subject: 'New Booking',
                text: `Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Pick Up Address: ${pickUpAddress} \n Drop Off Address: ${dropOffAddress} \n Date: ${date} \n Time: ${time} \n People: ${people} \n Instruction: ${instruction || ''}`,
                react: BookingEmail({ name, email, phone, pickUpAddress, dropOffAddress, date, time, people, instructions: instruction || '' })
            })
            return { success: true, data }
        }
        catch(error){
            return { success: false, error }
        }
    }

    if(result.error){
        return { success: false, errors: result.error.format() }
    }
    
}