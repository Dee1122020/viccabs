import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'About Vic Cabs - Premier Melbourne Taxi & Chauffeur Company',
  description: 'Learn about Vic Cabs, Melbourne\'s premier taxi and chauffeur service company. Luxury fleet, professional licensed drivers, and exceptional service since establishment. Serving Melbourne CBD and all suburbs.',
  keywords: [
    'about vic cabs',
    'melbourne taxi company',
    'chauffeur service melbourne',
    'licensed taxi drivers melbourne',
    'premier taxi service',
    'luxury car service melbourne',
    'professional chauffeur melbourne',
    'accredited taxi service',
  ],
  alternates: {
    canonical: '/pages/about',
  },
  openGraph: {
    title: 'About Vic Cabs - Premier Melbourne Taxi & Chauffeur Company',
    description: 'Learn about Vic Cabs, Melbourne\'s premier taxi and chauffeur service company. Luxury fleet, professional drivers, exceptional service.',
    url: 'https://viccabs.com.au/pages/about',
    type: 'website',
  },
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
              Welcome to Vic Cabs, Melbourne's premier <strong>luxury chauffeur and taxi service</strong>. As a leading <strong>Melbourne taxi company</strong>, we take pride in providing an unparalleled transportation experience, where every journey is a seamless blend of sophistication, comfort, and professionalism.
            </p>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              Since our establishment, we have been committed to delivering the finest <strong>taxi and chauffeur services Melbourne</strong> has to offer. Our reputation is built on years of excellence, serving thousands of satisfied customers across Melbourne CBD, surrounding suburbs, and Melbourne Airport. We understand the importance of reliable, safe, and luxurious transport, whether you're a busy executive, tourist exploring the city, or resident seeking quality transportation.
            </p>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              At Vic Cabs, we specialize in comprehensive transport solutions including <strong>airport transfers Melbourne</strong>, corporate chauffeur services, special event transportation, and daily taxi bookings. Our commitment to excellence has made us the preferred choice for discerning clients who demand nothing but the best in Melbourne transportation services.
            </p>
          </div> 
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold'>Our Fleet</h3>
        </div>

        <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
          <div className='md:w-5/6'>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              At Vic Cabs, we boast a meticulously curated fleet of modern, top-of-the-range <strong>chauffeur cars Melbourne</strong> that redefine elegance and style. Our collection features premium vehicles including luxury sedans from prestigious manufacturers such as Mercedes-Benz, BMW, and Audi, as well as spacious 7-seater SUVs perfect for families and group travel.
            </p>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              Each vehicle in our <strong>luxury taxi Melbourne</strong> fleet is equipped with modern amenities including climate control, premium leather seating, and advanced safety features. Our vehicles are regularly serviced and maintained to the highest standards, ensuring reliability and comfort on every journey. Whether you need a sophisticated sedan for business travel or a spacious SUV for Melbourne Airport transfers with luggage, our fleet has you covered.
            </p>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              We serve all areas of Melbourne including Melbourne CBD, South Yarra, Brighton, Carlton, Fitzroy, Docklands, and extends to Tullamarine Airport and surrounding suburbs across Victoria. Our commitment to fleet excellence ensures that every ride with Vic Cabs is not just transportation, but an indulgence in comfort and luxury.
            </p>
          </div>
          <div className='w-5/6 md:w-3/4 p-4 md:p-10'>

            {/*<img src="/luxury car3.jpg" alt="Luxury Car" />*/}

            <Image 
              src="/luxury-car3.jpg"
              alt='Luxury chauffeur car Melbourne - Premium taxi fleet'
              width={800}
              height={600}
            />
            
          </div> 
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl mb-3 md:mb-4 text-center font-semibold'>Our Chauffeurs</h3>
        </div>

        <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
          <div className='md:w-5/6'>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              Behind the wheel of every Vic Cabs vehicle is a highly trained, <strong>professional licensed taxi driver Melbourne</strong> residents trust. Our <strong>chauffeurs Melbourne</strong> are fully accredited, background-checked, and possess extensive knowledge of Melbourne's roads, traffic patterns, and best routes to ensure efficient travel.
            </p>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              Each member of our team embodies the values of courtesy, discretion, and reliability. Our drivers undergo rigorous training in customer service, defensive driving techniques, and professional conduct. They are equipped with the latest GPS technology and traffic monitoring systems to navigate Melbourne efficiently, whether it's a quick CBD trip or an <strong>airport transfer Melbourne</strong> to Tullamarine.
            </p>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              Our chauffeurs are not just drivers; they are ambassadors of the Vic Cabs brand, dedicated to providing an exceptional and personalized experience. Whether you require a <strong>corporate chauffeur service</strong> with discretion for business meetings or a friendly driver for airport pickups, our team delivers professionalism at every turn.
            </p>
          </div>
          <div className='w-5/6 md:w-3/4 p-4 md:p-10'>
            {/*<img src="/chauffeur.jpg" alt="Chauffeur" />*/}

            <Image 
              src="/chauffeur.jpg"
              alt='Professional chauffeur Melbourne - Licensed taxi driver'
              width={800}
              height={600}
            />
          </div> 
        </div>

        <div>
          <h3 className='text-2xl md:text-3xl mb-3 md:mb-4 text-center font-semibold'>Commitment to Excellence</h3>
        </div>

        <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
          <div className='md:w-5/6'>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              At Vic Cabs, our mission is to redefine <strong>luxury transport Melbourne</strong> by setting the highest standards in the taxi and chauffeur industry. We are driven by a passion for delivering unparalleled service, ensuring that every client experiences the epitome of comfort, safety, and style throughout their journey.
            </p>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              Our commitment to excellence extends beyond just providing transport. We focus on creating memorable experiences through attention to detail, punctuality, and customer satisfaction. Whether it's a crucial business meeting, an important flight to catch, or a special celebration, we understand the significance of reliable, premium transportation in Melbourne.
            </p>
            <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
              We continuously invest in our fleet, train our drivers, and refine our processes to maintain our position as Melbourne's <strong>premier taxi and chauffeur service</strong>. Our transparent pricing, easy online booking system, and 24/7 availability reflect our dedication to customer convenience. When you choose Vic Cabs, you're choosing a company that values your time, comfort, and peace of mind above all else.
            </p>
          </div>
          <div className='w-5/6 md:w-3/4 p-4 md:p-10'>
            {/*<img src="/excellence.jpg" alt="Excellence" />*/}

            <Image 
              src="/excellence.jpg"
              alt='Excellence in Melbourne taxi and chauffeur service'
              width={800}
              height={600}
            />
          </div>
        </div> 
      </div>

      
    </div>
  )
}

export default About