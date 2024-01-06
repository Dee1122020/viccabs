import Link from 'next/link'
import React from 'react'

function Contact() {
  return (
    <div className="text-gray-400 bg-black p-5">
      <div>
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 py-6">
          Contact Us
        </h2>
      </div>
      <div className='flex flex-row-reverse gap-5 p-5 items-center'>
        <div className="w-1/2 px-2">
          <img src="/callcenter.jpg" alt="Call Center" />
        </div>
        <div className='w-1/2 items-center p-7'>
          <p className="text-1xl text-justify sm:text-2xl mb-6">
          Experience the pinnacle of luxury chauffeur services and premium taxi services with Victoria Cabs. Contact us today to book your next journey or to discuss how we can tailor our services to meet your specific needs.
          </p>

          <h3 className="text-2xl text-justify capitalize sm:text-3xl mb-6 mt-16">
             Call us now&nbsp;
            <Link href="tel:+611300121213"
              ><u className="text-indigo-700">1300121213</u></Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Contact