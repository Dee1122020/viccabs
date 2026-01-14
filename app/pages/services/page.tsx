import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Our Services - Melbourne Taxi, Chauffeur, Airport Transfer & Delivery',
  description: 'Premium Melbourne taxi services including 24/7 taxi booking, luxury chauffeur service, airport transfers to Tullamarine, family SUV transport, and reliable package delivery. Professional drivers, competitive rates, instant booking.',
  keywords: [
    'melbourne taxi service',
    'chauffeur service melbourne',
    'airport transfer melbourne',
    'melbourne airport taxi',
    'taxi booking melbourne',
    'corporate chauffeur melbourne',
    'luxury taxi melbourne',
    'family suv taxi',
    '7 seater taxi melbourne',
    'tullamarine airport transfer',
    'delivery service melbourne',
    'courier service melbourne',
    'package delivery melbourne',
    'parcel delivery melbourne',
  ],
  alternates: {
    canonical: '/pages/services',
  },
  openGraph: {
    title: 'Our Services - Melbourne Taxi, Chauffeur, Airport Transfer & Delivery',
    description: 'Premium Melbourne taxi services including 24/7 taxi booking, luxury chauffeur service, airport transfers, family SUV transport, and package delivery.',
    url: 'https://viccabs.com.au/pages/services',
    type: 'website',
  },
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
                  Vic Cabs takes pride in offering a <strong>premium taxi service Melbourne</strong> that goes beyond the ordinary. Our fleet of meticulously maintained vehicles ensures a comfortable and stylish journey for every passenger, whether you're heading to a business meeting, exploring the city, or need late-night transportation.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Our <strong>24/7 taxi service Melbourne</strong> offers convenient online booking through our website or instant phone booking at 0477 226 627. We provide transparent, competitive pricing with no hidden fees. All our taxis are equipped with modern GPS navigation, ensuring the most efficient routes through Melbourne's streets. Payment options include cash, credit/debit cards, and contactless payments for your convenience.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  We cover all Melbourne suburbs including CBD, South Melbourne, Port Melbourne, St Kilda, Brighton, Carlton, Fitzroy, Richmond, South Yarra, Docklands, and beyond. Our <strong>reliable taxi Melbourne</strong> service guarantees prompt pickups, courteous drivers, and a comfortable ride every time. Perfect for daily commutes, shopping trips, medical appointments, or nights out.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/taxiService.jpg" alt="Taxi Service" />*/}
                <Image 
                  src="/taxi-service.jpg"
                  alt='Premium taxi service Melbourne - 24/7 taxi booking'
                  width={800}
                  height={600}
                  className="w-full h-auto"
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
                  Indulge in the ultimate luxury with our <strong>chauffeur service Melbourne</strong>. Our professional chauffeurs are dedicated to providing a service that exceeds expectations, combining elegance, discretion, and punctuality. Perfect for <strong>corporate chauffeur Melbourne</strong> needs, executive meetings, special occasions, and VIP transport.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Our <strong>executive car service Melbourne</strong> features premium vehicles including Mercedes-Benz, BMW, and Audi sedans, all impeccably maintained and presented. Services include meet-and-greet, door-to-door service, and professional chauffeurs dressed in business attire. Ideal for corporate clients, business travelers, weddings, formal events, wine tours, and special celebrations throughout Melbourne and Victoria.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  We offer flexible booking options including hourly chauffeur hire, full-day bookings, and multi-day corporate accounts. Our <strong>business chauffeur Melbourne</strong> service provides the discretion and professionalism expected by executives and corporate clients. Complimentary refreshments, phone chargers, and Wi-Fi available in select vehicles. Book your chauffeur service today for a sophisticated travel experience.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/chauffeur2.jpg" alt="Chauffeur Service" />*/}
                <Image 
                  src="/chauffeur2.jpg"
                  alt='Luxury chauffeur service Melbourne - Executive car service'
                  width={800}
                  height={600}
                  className="w-full h-auto"
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
                  Start and end your travels with seamless <strong>airport transfer Melbourne</strong> service by Vic Cabs. Our <strong>Melbourne airport taxi</strong> service specializes in reliable transportation to and from Tullamarine Airport, ensuring you reach your destination on time, stress-free, and in comfort.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Our <strong>Tullamarine airport taxi</strong> service includes flight tracking to monitor delays and early arrivals, meet-and-greet service at arrivals with name boards, assistance with luggage, and coverage of all domestic and international terminals. We offer fixed-rate pricing with no surge charges, so you know the cost upfront. Pre-book your airport transfer online for guaranteed pickup times.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Experience the convenience of door-to-door <strong>airport pickup Melbourne</strong> service with our expert drivers who know the best routes and understand the importance of punctuality for flights. Whether it's an early morning departure or late-night arrival, our 24/7 airport transfer service has you covered. Perfect for business travelers, families, and tourists. Book your Melbourne Airport transfer today for reliable, comfortable transport.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/airport transfer.jpg" alt="Airport Transfer" />*/}
                <Image 
                  src="/airport-transfer.jpg"
                  alt='Melbourne airport taxi - Airport transfer service Tullamarine'
                  width={800}
                  height={600}
                  className="w-full h-auto"
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
                  For your family's transportation needs, Vic Cabs offers spacious and comfortable <strong>7-seater taxi Melbourne</strong> options. Our <strong>family SUV taxi service</strong> features large vehicles perfect for group travel, family outings, airport transfers with substantial luggage, or special events requiring multiple passengers.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Our SUV fleet includes premium vehicles with ample space for up to 7 passengers and generous luggage capacity. Features include child seat availability upon request (booster seats and baby capsules), climate-controlled comfort, entertainment systems, and spacious legroom. Perfect for <strong>family-friendly taxi Melbourne</strong> needs including school runs, sporting events, shopping trips, and day excursions.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Whether you're planning a family day out to the beach, need airport transport for your group with luggage, or require reliable transportation for sporting teams, our bigger SUVs are equipped to provide a safe and enjoyable journey. All vehicles meet stringent safety standards and are regularly maintained. Book your <strong>SUV taxi service Melbourne</strong> online or by phone for comfortable group transportation at competitive rates.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/SUV.jpg" alt="SUV" />*/}
                <Image 
                  src="/suv.jpg"
                  alt='Family SUV taxi Melbourne - 7 seater taxi service'
                  width={800}
                  height={600}
                  className="w-full h-auto"
                />
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3">Package & Parcel Delivery
            </h3>
            <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
              <div className='md:w-5/6'>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Need reliable <strong>delivery service Melbourne</strong>? Vic Cabs offers professional package and parcel delivery across Melbourne and surrounding areas. Our <strong>courier service Melbourne</strong> ensures your documents, packages, and parcels reach their destination safely and promptly. Perfect for businesses requiring urgent document delivery, online sellers needing reliable shipping, or individuals sending important packages.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Our <strong>package delivery Melbourne</strong> service provides same-day delivery options, real-time tracking, secure handling of your items, and proof of delivery documentation. We handle everything from small envelopes and documents to larger parcels and multiple packages. Our professional drivers treat every delivery with care, ensuring safe transport and timely arrival. Ideal for legal documents, business contracts, e-commerce packages, gifts, and urgent deliveries.
                </p>
                <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                  Whether you need a one-time <strong>parcel delivery Melbourne</strong> or regular courier services for your business, Vic Cabs provides flexible solutions to meet your needs. We service all Melbourne suburbs including CBD, surrounding areas, and can arrange regional deliveries. Competitive rates for both individual and business accounts. Book your delivery online or call 0477 226 627 for immediate pickup and delivery service.
                </p>
              </div>
              <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                {/*<img src="/flinders-street-station.jpg" alt="Delivery Service" />*/}
                <Image 
                  src="/flinders-street-station.jpg"
                  alt='Package delivery service Melbourne - Reliable courier service'
                  width={800}
                  height={600}
                  className="w-full h-auto"
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