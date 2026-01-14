interface BookingEmailProps {
    name: string
    email: string
    phone: string
    pickUpAddress: string
    dropOffAddress: string
    date: string
    time: string
    serviceType: string
    instructions: string
}

const getServiceTypeLabel = (serviceType: string): string => {
    const labels: Record<string, string> = {
        'sedan': 'Sedan',
        'suv-5': 'SUV (5 Seater)',
        'suv-7': 'SUV (7 Seater)',
        'taxi-van-10': 'Taxi Van (10 Seater)',
        'wheelchair-van': 'Wheelchair Accessible Van',
        'parcel-delivery': 'Parcel Delivery'
    }
    return labels[serviceType] || serviceType
}

const BookingEmail: React.FC<BookingEmailProps> = ({name, email, phone, pickUpAddress, dropOffAddress, date, time, serviceType, instructions}) => {
    return (
        <div>
            <h1>Booking Request</h1>
            <p>Hi, this is {name}.</p>
            <p>I would like to book a {getServiceTypeLabel(serviceType)} on {date} at {time}.</p>
            <p>Pick up address: {pickUpAddress}</p>
            <p>Drop off address: {dropOffAddress}</p>
            <p>My email address is {email} and my phone number is {phone}.</p>
            <p>Instructions: {instructions===''?'No instructions':instructions}</p>
        </div>
    )
}

export default BookingEmail