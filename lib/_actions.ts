'use server'
import { z } from "zod"
import { BookingInput, bookingSchema } from "@/models/Booking"
import { Resend } from "resend"
import BookingEmail from "@/email/BookingEmail"
import axios from 'axios'

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

// WhatsApp Helper Functions
function formatAustralianPhone(phoneNumber: string): string {
  // Remove all non-digit characters
  let digits = phoneNumber.replace(/\D/g, '');
  
  // Handle Australian formats
  if (digits.startsWith('0')) {
    // 04xx xxx xxx -> 61xxxxxxxxx
    return '61' + digits.substring(1);
  } else if (digits.startsWith('61')) {
    // Already in international format
    return digits;
  } else if (digits.startsWith('+61')) {
    // Remove + sign
    return '61' + digits.substring(3);
  }
  
  // Return as-is (should be 61xxxxxxxxx)
  return digits;
}

function formatBookingMessage(booking: BookingInput): string {
  return `🚖 *NEW CAB BOOKING* 🚖

*Customer Details:*
👤 Name: ${booking.name}
📞 Phone: ${booking.phone}
📧 Email: ${booking.email}

*Trip Details:*
📍 Pickup: ${booking.pickUpAddress}
🎯 Dropoff: ${booking.dropOffAddress}
📅 Date: ${booking.date}
🕒 Time: ${booking.time}
👥 Passengers: ${booking.people.toString()}

📝 Requests: ${booking.instruction || 'None'}


⏰ Submitted: ${new Date().toLocaleString('en-AU')}`;
}

async function sendWhatsAppMessage(
  phoneNumber: string, 
  message: string
): Promise<{ success: boolean; messageId?: string }> {
  try {
    const formattedPhone = formatAustralianPhone(phoneNumber);
    const GREEN_API_URL = `https://7105.api.greenapi.com/waInstance${process.env.GREEN_API_ID_INSTANCE}/sendMessage/${process.env.GREEN_API_TOKEN_INSTANCE}`;
    
    const response = await axios.post(
      GREEN_API_URL,
      {
        chatId: `${formattedPhone}@c.us`,
        message: message
      }
    );

    return {
      success: true,
      messageId: response.data.idMessage
    };
  } catch (error: any) {
    console.error('WhatsApp send error:', error.response?.data || error.message);
    return { success: false };
  }
}

export async function sendBookingWhatsApp(booking: BookingInput): Promise<{ success: boolean; data?: any; error?: string }> {
  console.log('WHATSAPP_RECIPIENTS env:', process.env.WHATSAPP_RECIPIENTS);
  console.log('GREEN_API_ID_INSTANCE env:', process.env.GREEN_API_ID_INSTANCE ? 'Set' : 'Not set');
  
  const recipients = process.env.WHATSAPP_RECIPIENTS?.split(',').map(r => r.trim()) || [];

  console.log('Parsed recipients:', recipients);
  
  if (recipients.length === 0) {
    return { success: false, error: 'No recipients configured' };
  }
  
  const message = formatBookingMessage(booking);
  
  let successCount = 0;
  let errorCount = 0;

  for (const recipient of recipients) {
    const result = await sendWhatsAppMessage(recipient.trim(), message);
    console.log(`WhatsApp to ${recipient}: ${result.success ? '✓' : '✗'}`);
    
    if (result.success) {
      successCount++;
    } else {
      errorCount++;
    }
  }

  if (successCount > 0 && errorCount === 0) {
    return { success: true, data: { sentTo: successCount } };
  } else if (errorCount > 0) {
    return { success: false, error: `Failed to send to ${errorCount} recipient(s)` };
  }
  
  return { success: false, error: 'No recipients configured' };
}

export async function sendEmail(data: BookingInput) {

    const result = bookingSchema.safeParse(data)

    if(result.success){
        const { name, email, phone, pickUpAddress, dropOffAddress, date, time, people, instruction } = result.data

        try{
            const data = await resend.emails.send({
                from: 'Vic Cabs <booking@viccabs.com.au>',
                to: ['dee.taxis.au@gmail.com', 'admin@viccabs.com.au'],
                //cc: 'dee.taxis.au@gmail.com',
                reply_to: `${email}`,
                subject: 'New Booking',
                text: `Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Pick Up Address: ${pickUpAddress} \n Drop Off Address: ${dropOffAddress} \n Date: ${date || ''} \n Time: ${time || ''} \n People: ${people} \n Instruction: ${instruction || ''}`,
                react: BookingEmail({ name, email, phone, pickUpAddress, dropOffAddress, date: date || '', time: time || '', people, instructions: instruction || '' })
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