'use client'
import React, { use, useState } from 'react'

function BookingForm() {
    const[name, setName] = useState('')
    const[email, setemail] = useState('')
    const[phone, setphone] = useState('')
    const[message, setmessage] = useState('')

  return (
    <>
        <div>BookingForm</div>
    
        <form>
          <input type="text" placeholder='Name' />
          <input type="text" placeholder='Email' />
          <input type="text" placeholder='Phone Number' />
          <input type='textarea'/>
        </form>
    </>
  )
}

export default BookingForm