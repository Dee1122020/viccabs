import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Connect with Vic Cabs for luxury transport in Melbourne. Get in touch for inquiries by calling us on 1300 12 12 13. Book Online for premium service.',
  alternates: {
    canonical: '/pages/contact',
  }
}

function Contact() {
  return (
    <div className="bg-black text-gray-400 flex flex-col px-10 py-3 md:px-0 md:py-0">
      <div>
        <h2 className="text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3">
          Contact Us
        </h2>
      </div>
      <div className='flex flex-col md:flex-row-reverse gap-5 p-5 items-center'>
        <div className="md:w-1/2 px-4">
          <img src="/callcenter.jpg" alt="Call Center" />
        </div>
        <div className='md:w-1/2 items-center md:p-7'>
          <p className="text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify">
          Experience the pinnacle of luxury chauffeur services and premium taxi services with Vic Cabs. Book online to book your next journey or call us to discuss how we can tailor our services to meet your specific needs.
          </p>

          <h3 className="text-2xl md:text-3xl mb-3 m-2 p-1 md:m-4 font-semibold capitalize">
             Call us now on&nbsp;
            <Link href="tel:+611300121213"
              ><u className="text-indigo-700">1300 12 12 13</u></Link><br/>&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&ensp;&ensp;
            <Link href="tel:+61470445670"><u className="text-indigo-700">0470 445 670</u></Link>
          </h3>
        </div>
      </div>
    </div>
  )
}

export default Contact