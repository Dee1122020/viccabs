import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import taxiService from '../../../public/taxiService.jpg'
import chauffeur2 from '../../../public/chauffeur2.jpg'
import airportTransfer from '../../../public/airport transfer.jpg'
import SUV from '../../../public/SUV.jpg'

export const metadata: Metadata = {
  title: 'Services',
  description: 'Explore premium taxi, chauffeur, airport transfer, and family-friendly SUV services at Vic Cabs. Book your luxury ride now! Book online for a seamless journey.',
  alternates: {
    canonical: '/pages/services',
  }
}

function Services() {
  return (
    <div className='bg-black text-gray-400 flex flex-col px-10 py-3 md:px-0 md:py-0'>
      <div>
        <div>
          <h2 className='text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3'>Our Services</h2>
        </div>
        <div>
          <section className='mt-6 md:mt-8'>
            <h3 className="text-2xl md:text-3xl mb-3 text-center font-semibold">Premium Taxi Service
            </h3>
            <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
              <div className='md:w-5/6'>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                Vic Cabs takes pride in offering a premium taxi service that goes beyond the ordinary. Our fleet of meticulously maintained vehicles ensures a comfortable and stylish journey for every passenger. Whether you're heading to a business meeting or exploring the city, our premium taxi service combines reliability with luxury.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/taxiService.jpg" alt="Taxi Service" />*/}
                <Image 
                  src={taxiService}
                  alt='Taxi Service'
                />
              </div>
            </div>
          </section>
          
          <section>
            <h3 className="text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3">Chauffeur Service
            </h3>
            <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
              <div className='md:w-5/6'>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                Indulge in the ultimate chauffeur experience with Vic Cabs. Our professional chauffeurs are dedicated to providing a service that exceeds expectations. From corporate events to special occasions, our chauffeur service is designed to add a touch of sophistication to your every journey.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/chauffeur2.jpg" alt="Chauffeur Service" />*/}
                <Image 
                  src={chauffeur2}
                  alt='Chauffeur Service'
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3">Airport Transfer
            </h3>
            <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
              <div className='md:w-5/6'>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                Start and end your travels with seamless airport transfers by Vic Cabs. Our prompt and reliable service ensures that you reach your destination on time, stress-free. Experience the convenience of door-to-door transfers with our expert drivers and premium vehicles.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/airport transfer.jpg" alt="Airport Transfer" />*/}
                <Image 
                  src={airportTransfer}
                  alt='Airport Transfer'
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3">Family-Friendly SUVs
            </h3>
            <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
              <div className='md:w-5/6'>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                For your family's transportation needs, Vic Cabs offers spacious and comfortable SUVs. Whether you're planning a day out or need transportation for a larger group, our bigger SUVs are equipped to provide a safe and enjoyable journey for the whole family.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/SUV.jpg" alt="SUV" />*/}
                <Image 
                  src={SUV}
                  alt='SUV'
                />
              </div>
            </div>
          </section>

        </div>

      </div>
    </div>
  )
}

export default Services