import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'
import luxuryCar2 from '../../../public/luxury-car2.jpg'
import chauffeur3 from '../../../public/chauffeur3.jpg'
import femaleDriver from '../../../public/female-driver.jpg'
import womanInTheCar from '../../../public/woman-in-the-car.jpg'
import airportTransfer2 from '../../../public/airport-transfer2.jpg'
import familyFriendly from '../../../public/family-friendly.jpg'

export const metadata: Metadata = {
    title: 'Why Choose Us',
    description: 'Vic Cabs: Exquisite Fleet, Professional Drivers, Tailored Experiences, Reliability, Airport Excellence, and Family-Friendliness. Visit our Book page to book online.',
    alternates: {
        canonical: '/pages/whyChoose',
      }
  }

function WhyChoose() {
  return (
    <div className='bg-black text-gray-400 flex flex-col px-10 py-3 md:px-0 md:py-0'>
        <section>
            <h2 className='text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3'>Why Choose Vic Cabs</h2>
        </section>

        <div>
            <section className='mt-6 md:mt-8'>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold'>Exquisite Fleet</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Our collection of top-of-the-range vehicles caters to your every need, whether it's a corporate event, airport transfer, or a special occasion.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/luxury car2.jpg" alt="Luxury Car" />*/}
                        <Image 
                            src={luxuryCar2}
                            alt='Luxury Car'
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Professional drivers</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                        Our chauffeurs and taxi drivers are not just drivers; they are trained professionals dedicated to providing a service that exceeds expectations.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/chauffeur3.jpg" alt="Proffessional Driver" />*/}
                        <Image 
                            src={chauffeur3}
                            alt='Professional Driver'
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Tailored Experiences</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                        We understand that every journey is unique. Our team is committed to tailoring our services to meet your specific requirements, ensuring a personalized experience.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/female driver.jpg" alt="Call Center" />*/}
                        <Image 
                            src={femaleDriver}
                            alt='Tailored Experience'
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Reliability</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                        Punctuality and reliability are at the core of our service. When you choose Vic Cabs, you can trust us to get you to your destination on time, every time.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/woman in the car.jpg" alt="Reliable Service" />*/}
                        <Image 
                            src={womanInTheCar}
                            alt='Reliable Service'
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Airport Excellence</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                        Trust us for reliable and stress-free airport transfers, ensuring you reach your destination on time.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/airport transfer2.jpg" alt="Airport Service" />*/}
                        <Image 
                            src={airportTransfer2}
                            alt='Airport Service'
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Family-Friendly</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                        Our bigger SUVs cater to the needs of families, providing spacious and comfortable transportation.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/family friendly.jpg" alt="Family Friendly Service" />*/}
                        <Image 
                            src={familyFriendly}
                            alt='Family Friendly Service'
                        />
                    </div>

                </div>


            </section>
            
        </div>
    </div>
  )
}

export default WhyChoose