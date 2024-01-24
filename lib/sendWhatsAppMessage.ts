interface SendWhatsAppMessage {
    name: string
    email: string
    phone: string
    pickUpAddress: string
    dropOffAddress: string
    date?: string
    time?: string
    people: string
    instruction?: string
}

export async function sendWhatsAppMessage(data: SendWhatsAppMessage) {
    const receiver = process.env.WHATSAPP_RECEIVER
    const { name, email, phone, pickUpAddress, dropOffAddress, date, time, people, instruction } = data

    const message = `Name: ${name} \n Email: ${email} \n Phone: ${phone} \n Pick Up Address: ${pickUpAddress} \n Drop Off Address: ${dropOffAddress} \n Date: ${date || ''} \n Time: ${time || ''} \n People: ${people} \n Instruction: ${instruction || ''}`

    let url: string = '';

    if(message){
        url = `https://wa.me/${receiver}?text=${encodeURIComponent(message)}`
    }

    window.open(url);
    //return { success: true };
}
