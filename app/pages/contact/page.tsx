import { Metadata } from 'next'
import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export const metadata: Metadata = {
  title: 'Contact Vic Cabs - Book Melbourne Taxi & Chauffeur Service',
  description: 'Contact Vic Cabs for premium Melbourne taxi and chauffeur bookings. Call 0477 226 627 for 24/7 service. Instant online booking available. Serving Melbourne CBD and all suburbs.',
  keywords: [
    'contact melbourne taxi',
    'book taxi melbourne phone',
    'vic cabs contact',
    'melbourne taxi number',
    'chauffeur booking melbourne',
    'taxi enquiries melbourne',
    'melbourne cab booking',
  ],
  alternates: {
    canonical: '/pages/contact',
  },
  openGraph: {
    title: 'Contact Vic Cabs - Book Melbourne Taxi & Chauffeur Service',
    description: 'Contact Vic Cabs for premium Melbourne taxi and chauffeur bookings. Call 0477 226 627 for 24/7 service.',
    url: 'https://viccabs.com.au/pages/contact',
    type: 'website',
  },
}

function Contact() {
  return (
    <div className="bg-black text-gray-400 flex flex-col px-10 py-3 md:px-0 md:py-0">
      <div>
        <h2 className="text-3xl font-semibold text-center mt-6 md:mt-8 py-2 md:text-4xl md:font-semibold md:mb-3 md:py-3">
          Contact Vic Cabs
        </h2>
      </div>
      
      <div className='flex flex-col md:flex-row-reverse gap-5 p-5 items-center mb-8'>
        <div className="md:w-1/2 px-4">
          <Image 
            src="/callcenter.jpg"
            alt='Contact Vic Cabs Melbourne taxi service'
            width={800}
            height={600}
            className="w-full h-auto"
          />
        </div>
        <div className='md:w-1/2 items-center md:p-7'>
          <p className="text-xl font-medium md:text-2xl m-2 px-1 md:m-4 md:text-justify">
            Experience the pinnacle of <strong>luxury chauffeur services</strong> and <strong>premium taxi services Melbourne</strong> with Vic Cabs. Whether you need an immediate pickup or want to schedule a future booking, we're here to serve you 24/7. Book online for your next journey or call us to discuss how we can tailor our services to meet your specific needs.
          </p>

          <h3 className="text-2xl md:text-3xl mb-3 m-2 p-1 md:m-4 font-semibold">
             Call us 24/7:&nbsp;
            <Link href="tel:+61477226627"><u className="text-indigo-400 hover:text-indigo-300">0477 226 627</u></Link>
          </h3>

          <div className="text-lg md:text-xl m-2 px-1 md:m-4 space-y-2">
            <p><strong className="text-gray-300">Email:</strong> <Link href="mailto:info@viccabs.com.au" className="text-indigo-400 hover:text-indigo-300">info@viccabs.com.au</Link></p>
            <p><strong className="text-gray-300">Service Areas:</strong> Melbourne CBD, All Suburbs, Melbourne Airport</p>
            <p><strong className="text-gray-300">Operating Hours:</strong> 24 Hours, 7 Days a Week</p>
          </div>
        </div>
      </div>

      {/* Service Coverage Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 mb-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-6">
          Our Service Coverage
        </h3>
        <p className="text-lg md:text-xl text-center mb-4">
          Vic Cabs provides <strong>Melbourne taxi and chauffeur services</strong> across all areas including:
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center text-base md:text-lg">
          <div className="bg-gray-900 p-3 rounded">Melbourne CBD</div>
          <div className="bg-gray-900 p-3 rounded">South Yarra</div>
          <div className="bg-gray-900 p-3 rounded">Dandenong</div>
          <div className="bg-gray-900 p-3 rounded">Brighton</div>
          <div className="bg-gray-900 p-3 rounded">Carlton</div>
          <div className="bg-gray-900 p-3 rounded">Fitzroy</div>
          <div className="bg-gray-900 p-3 rounded">Richmond</div>
          <div className="bg-gray-900 p-3 rounded">St Kilda</div>
          <div className="bg-gray-900 p-3 rounded">Docklands</div>
          <div className="bg-gray-900 p-3 rounded">Port Melbourne</div>
          <div className="bg-gray-900 p-3 rounded">Tullamarine Airport</div>
          <div className="bg-gray-900 p-3 rounded">All Melbourne Suburbs</div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="max-w-5xl mx-auto px-4 md:px-6 mb-12">
        <h3 className="text-2xl md:text-3xl font-semibold text-center text-white mb-8">
          Frequently Asked Questions
        </h3>
        
        <div className="space-y-6">
          <div className="bg-gray-900 p-5 md:p-6 rounded-lg">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
              How do I book a taxi with Vic Cabs?
            </h4>
            <p className="text-base md:text-lg">
              You can book a <strong>Melbourne taxi</strong> through our online booking form on the website, or call us directly at 0477 226 627 for immediate bookings. We offer instant confirmation for both methods.
            </p>
          </div>

          <div className="bg-gray-900 p-5 md:p-6 rounded-lg">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
              Do you offer airport transfer services?
            </h4>
            <p className="text-base md:text-lg">
              Yes! We specialize in <strong>Melbourne airport transfers</strong> to and from Tullamarine Airport. Our service includes flight tracking, meet-and-greet options, and fixed-rate pricing. We cover all domestic and international terminals.
            </p>
          </div>

          <div className="bg-gray-900 p-5 md:p-6 rounded-lg">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
              What payment methods do you accept?
            </h4>
            <p className="text-base md:text-lg">
              We accept cash, credit cards, debit cards, and contactless payments. Corporate clients can arrange invoicing through our accounts department.
            </p>
          </div>

          <div className="bg-gray-900 p-5 md:p-6 rounded-lg">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
              Are your drivers licensed and insured?
            </h4>
            <p className="text-base md:text-lg">
              Absolutely. All our drivers are fully licensed, accredited, background-checked, and insured. They undergo regular training in customer service and defensive driving.
            </p>
          </div>

          <div className="bg-gray-900 p-5 md:p-6 rounded-lg">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
              Do you have vehicles for larger groups or families?
            </h4>
            <p className="text-base md:text-lg">
              Yes, we have <strong>7-seater SUV taxis</strong> perfect for families and groups. Child seats are available upon request. These vehicles offer ample space for passengers and luggage.
            </p>
          </div>

          <div className="bg-gray-900 p-5 md:p-6 rounded-lg">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
              What areas of Melbourne do you service?
            </h4>
            <p className="text-base md:text-lg">
              We service all of Melbourne including CBD, inner suburbs, outer suburbs, Melbourne Airport, and can also arrange regional Victoria transfers.
            </p>
          </div>

          <div className="bg-gray-900 p-5 md:p-6 rounded-lg">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
              Can I book a chauffeur for corporate events?
            </h4>
            <p className="text-base md:text-lg">
              Yes, our <strong>corporate chauffeur Melbourne</strong> service is ideal for business meetings, client transport, and corporate events. We offer hourly bookings, corporate accounts, and dedicated account management.
            </p>
          </div>

          <div className="bg-gray-900 p-5 md:p-6 rounded-lg">
            <h4 className="text-lg md:text-xl font-semibold text-white mb-2">
              How far in advance should I book?
            </h4>
            <p className="text-base md:text-lg">
              For airport transfers and special events, we recommend booking at least 24 hours in advance. However, we also accept immediate bookings subject to availability. Call us for urgent requirements.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-4xl mx-auto px-4 md:px-6 mb-12 text-center bg-indigo-900 bg-opacity-20 py-8 rounded-lg border border-indigo-800">
        <h3 className="text-2xl md:text-3xl font-semibold text-white mb-4">
          Ready to Book Your Melbourne Taxi?
        </h3>
        <p className="text-lg mb-6">
          Get in touch now for premium <strong>taxi and chauffeur services Melbourne</strong>
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link 
            href="/pages/book" 
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Book Online Now
          </Link>
          <Link 
            href="tel:+61477226627" 
            className="inline-block bg-gray-700 hover:bg-gray-600 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
          >
            Call 0477 226 627
          </Link>
        </div>
      </section>
    </div>
  )
}

export default Contact