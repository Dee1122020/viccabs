import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: 'About',
  description: 'Discover the epitome of luxury travel at Vic Cabs. Top-tier chauffeur services and premium vehicles await. Call 1300 121 213 to redefine your journey.',
  alternates: {
    canonical: '/pages/about',
  }
}

function About() {
  return (
    <div className='bg-black text-gray-400 flex flex-col px-10 py-3 md:px-0 md:py-0'>
      <div>
        <div>
          <h2 className='text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3'>About Us</h2>
        </div>
        <div className='flex flex-col p-3 md:p-4 items-center mb-8 md:mb-16'>
          <div className='md:w-5/6'>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              Welcome to Vic Cabs, the epitome of luxury chauffeur and taxi services in Melbourne. We take pride in providing an unparalleled experience, where every journey is a seamless blend of sophistication, comfort, and professionalism.
            </p>
          </div> 
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold'>Our Fleet</h3>
        </div>

        <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
          <div className='md:w-5/6'>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              At Vic Cabs, we boast a meticulously curated fleet of modern, top-of-the-range chauffeur cars that redefine elegance and style. From sleek sedans to spacious SUVs, each vehicle in our collection is a symbol of luxury and craftsmanship. Our commitment to excellence extends to the maintenance of our fleet, ensuring that every ride with us is not just a journey but an indulgence in opulence.
            </p>
          </div>
          <div className='w-5/6 md:w-3/4 p-4 md:p-10'>
            <img src="/luxury car.jpg" alt="Luxury Car" />
          </div> 
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl mb-3 md:mb-4 text-center font-semibold'>Our Chauffeurs</h3>
        </div>

        <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
          <div className='md:w-5/6'>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
            Behind the wheel of every Vic Cabs vehicle is a highly trained, professional chauffeur dedicated to delivering a superior service. Our chauffeurs embody the values of courtesy, discretion, and reliability. They are not just drivers; they are ambassadors of our commitment to providing an exceptional and personalized experience to our clients.
            </p>
          </div>
          <div className='w-5/6 md:w-3/4 p-4 md:p-10'>
            <img src="/chauffeur.jpg" alt="Chauffeur" />
          </div> 
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl mb-3 md:mb-4 text-center font-semibold'>Commitment to Excellence</h3>
        </div>

        <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
          <div className='md:w-5/6'>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
            At Vic Cabs, our mission is to redefine luxury transport by setting the highest standards in the industry. We are driven by a passion for delivering unparalleled service, ensuring that every client experiences the epitome of comfort, safety, and style.
            </p>
          </div>
          <div className='w-5/6 md:w-3/4 p-4 md:p-10'>
            <img src="/excellence.jpg" alt="Excellence" />
          </div>
        </div> 
      </div>

      
    </div>
  )
}

export default About