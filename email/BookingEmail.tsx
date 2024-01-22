interface BookingEmailProps {
    name: string
    email: string
    phone: string
    pickUpAddress: string
    dropOffAddress: string
    date: string
    time: string
    people: string
    instructions: string
}

const BookingEmail: React.FC<BookingEmailProps> = ({name, email, phone, pickUpAddress, dropOffAddress, date, time, people, instructions}) => {
    return (
        <div>
            <h1>Booking Request</h1>
            <p>Hi, this is {name}.</p>
            <p>I would like to book a ride for {people} people on {date} at {time}.</p>
            <p>Pick up address: {pickUpAddress}</p>
            <p>Drop off address: {dropOffAddress}</p>
            <p>My email address is {email} and my phone number is {phone}.</p>
            <p>Instructions: {instructions}</p>
        </div>
    )
}

export default BookingEmail