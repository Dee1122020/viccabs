/**
 * @file Why Choose Us page for Vic Cabs website
 * @module app/pages/whyChoose/page
 * @author Vic Cabs
 * @date 2026-01-17
 * 
 * @description Page highlighting company differentiators and value propositions.
 * Showcases competitive advantages, driver qualifications, and service guarantees.
 * 
 * @exports {React.Component} WhyChoosePage - The why choose us page component
 */

import { Metadata } from 'next'
import React from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
    title: 'Why Choose Vic Cabs - Best Taxi & Chauffeur Service Melbourne',
    description: 'Discover why Vic Cabs is Melbourne\'s trusted taxi and chauffeur service. Premium fleet, professional drivers, 24/7 availability, reliable airport transfers, competitive pricing, and exceptional customer service.',
    keywords: [
      'best taxi service melbourne',
      'trusted chauffeur melbourne',
      'reliable taxi melbourne',
      'melbourne taxi benefits',
      'why choose vic cabs',
      'premium transport melbourne',
      'professional taxi service',
      'luxury car service melbourne',
    ],
    alternates: {
        canonical: '/pages/whyChoose',
      },
    openGraph: {
      title: 'Why Choose Vic Cabs - Best Taxi & Chauffeur Service Melbourne',
      description: 'Discover why Vic Cabs is Melbourne\'s trusted taxi and chauffeur service. Premium fleet, professional drivers, exceptional service.',
      url: 'https://viccabs.com.au/pages/whyChoose',
      type: 'website',
    },
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
                            Our collection of top-of-the-range vehicles caters to your every need, whether it's a corporate event, <strong>Melbourne airport transfer</strong>, or a special occasion. The Vic Cabs fleet represents the pinnacle of automotive excellence, featuring prestigious brands including Mercedes-Benz, BMW, and Audi, alongside spacious 7-seater SUVs for family travel.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Every vehicle in our <strong>luxury taxi Melbourne</strong> fleet undergoes rigorous maintenance schedules and regular inspections to ensure optimal performance and safety. Our cars feature premium leather interiors, advanced climate control systems, and modern amenities designed for your comfort. We pride ourselves on presenting immaculately clean vehicles for every journey, reflecting our commitment to excellence in <strong>premium transport Melbourne</strong>.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Whether you require an elegant sedan for business meetings, a luxury vehicle for special events, or a spacious SUV for family outings, our diverse fleet ensures we have the perfect vehicle for your specific requirements. All vehicles are equipped with GPS tracking, ensuring efficient navigation through Melbourne's streets.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/luxury car2.jpg" alt="Luxury Car" />*/}
                        <Image 
                            src="/luxury-car2.jpg"
                            alt='Exquisite luxury car fleet Melbourne - Premium taxi vehicles'
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Professional drivers</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Our chauffeurs and <strong>professional taxi drivers Melbourne</strong> are not just drivers; they are highly trained, licensed professionals dedicated to providing a service that exceeds expectations. Each member of our team undergoes comprehensive background checks, holds all necessary accreditations, and possesses extensive knowledge of Melbourne's roads, landmarks, and traffic patterns.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            What sets our drivers apart is their commitment to customer service excellence. They are trained in defensive driving techniques, professional etiquette, and customer care. Our <strong>chauffeurs Melbourne</strong> understand the importance of discretion for corporate clients, punctuality for airport transfers, and friendly service for all passengers. They maintain professional appearance and conduct at all times.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Every driver is equipped with advanced GPS navigation systems and real-time traffic monitoring to ensure you take the most efficient route to your destination. Their local expertise means they can recommend attractions, restaurants, and navigate through Melbourne's busy streets with ease, making your journey not just safe but enjoyable.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/chauffeur3.jpg" alt="Proffessional Driver" />*/}
                        <Image 
                            src="/chauffeur3.jpg"
                            alt='Professional taxi drivers Melbourne - Licensed chauffeurs'
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Tailored Experiences</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            We understand that every journey is unique and every client has different needs. Our team is committed to tailoring our <strong>Melbourne taxi and chauffeur services</strong> to meet your specific requirements, ensuring a personalized experience that goes beyond standard transportation. Whether you prefer a particular route, need specific amenities, or have special requests, we accommodate them whenever possible.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            For corporate clients, we offer customized solutions including dedicated account managers, invoicing arrangements, and regular driver assignments for consistency. Families can request child seats, specific music preferences, or temperature settings. Special occasion clients receive red carpet treatment with vehicle decorations and champagne service options. Our flexibility extends to route preferences, stop requirements, and waiting time arrangements.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            This personalized approach is what makes Vic Cabs the <strong>best taxi service Melbourne</strong> offers. We take time to understand your preferences and remember them for future bookings, creating a seamless and familiar experience every time you travel with us.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/female driver.jpg" alt="Call Center" />*/}
                        <Image 
                            src="/female-driver.jpg"
                            alt='Tailored taxi experience Melbourne - Personalized service'
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Reliability</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Punctuality and reliability are at the core of our service. When you choose Vic Cabs as your <strong>reliable taxi Melbourne</strong> provider, you can trust us to get you to your destination on time, every time. We understand that whether you're catching a flight, attending an important business meeting, or arriving at a special event, timing is crucial.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Our commitment to reliability is backed by advanced dispatch systems, GPS tracking, and real-time traffic monitoring. We account for traffic patterns, road conditions, and potential delays to ensure prompt service. Our drivers arrive at the designated pickup location on time, and our 24/7 availability means you can depend on us at any hour, any day of the year.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Thousands of Melbourne residents and visitors have made Vic Cabs their <strong>trusted taxi service</strong> because we consistently deliver on our promises. Our reliability extends beyond punctuality to include consistent service quality, transparent pricing, and professional conduct. We maintain backup vehicles and drivers to ensure service continuity even during peak demand periods.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/woman in the car.jpg" alt="Reliable Service" />*/}
                        <Image 
                            src="/woman-in-the-car.jpg"
                            alt='Reliable taxi service Melbourne - Trusted transport'
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Airport Excellence</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Trust Vic Cabs for reliable and stress-free <strong>Melbourne airport transfers</strong>, ensuring you reach your destination on time for every flight. Our specialized <strong>airport taxi Melbourne</strong> service has transported thousands of passengers to and from Tullamarine Airport, building a reputation for excellence in airport transportation.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            We offer comprehensive airport transfer services including flight monitoring to track delays and early arrivals, meet-and-greet service at the arrivals terminal with name boards, assistance with luggage handling, and knowledge of all terminal locations (domestic and international). Our drivers are familiar with airport procedures, parking areas, and the most efficient pickup and drop-off points.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Whether you're a business traveler needing to reach the airport quickly or a family arriving after a long international flight, our <strong>airport pickup Melbourne</strong> service provides comfort and reliability. We offer fixed-rate pricing for airport transfers, eliminating concerns about surge pricing or unexpected charges. Pre-book your airport transfer online for guaranteed peace of mind.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/airport transfer2.jpg" alt="Airport Service" />*/}
                        <Image 
                            src="/airport-transfer2.jpg"
                            alt='Melbourne airport transfer excellence - Reliable airport taxi'
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>

                </div>
            </section>

            <section>

                <h3 className='text-2xl md:text-3xl mb-3 text-center font-semibold capitalize'>Family-Friendly</h3>

                <div className='flex flex-col-reverse gap-3 p-3 md:gap-5 md:p-5 items-center mb-10 md:mb-16'>
                    <div className='md:w-5/6'>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Our bigger SUVs cater specifically to the needs of families, providing spacious and comfortable <strong>family-friendly taxi Melbourne</strong> transportation. We understand that traveling with children or as a group requires extra space, safety features, and amenities, which is why our <strong>7-seater taxi Melbourne</strong> fleet is perfectly equipped for family journeys.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Our family-focused services include child seat availability (booster seats, toddler seats, and baby capsules available upon request), ample luggage space for strollers, sports equipment, and shopping bags, entertainment options for children, and patient, family-friendly drivers experienced in traveling with young passengers. All our SUVs feature advanced safety systems and spacious interiors ensuring everyone travels comfortably.
                        </p>
                        <p className='text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify'>
                            Whether you're heading to the airport with the whole family, taking children to sporting events, planning a day trip around Melbourne, or need reliable school run transportation, our <strong>family taxi service</strong> provides the space, safety, and comfort your family deserves. Competitive group rates make traveling together affordable and convenient.
                        </p>
                    </div>

                    <div className='w-5/6 md:w-3/4 p-3 md:p-6'>
                        {/*<img src="/family friendly.jpg" alt="Family Friendly Service" />*/}
                        <Image 
                            src="/family-friendly.jpg"
                            alt='Family-friendly taxi Melbourne - 7 seater SUV service'
                            width={800}
                            height={600}
                            className="w-full h-auto"
                        />
                    </div>

                </div>


            </section>
            
        </div>
    </div>
  )
}

export default WhyChoose