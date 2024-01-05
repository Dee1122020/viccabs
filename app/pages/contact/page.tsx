import React from 'react'

function Contact() {
  return (
    <div className="p-6 my-8 scroll-mt-16 widescreen:section-min-height tallescreen:section-min-height capitalize">
      <div className='flex flex-row-reverse gap-2'>
        <div className="w-1/2">
          <img src="/callcenter.jpg" alt="Call Center" />
        </div>
        <div className='w-1/2 mt-16'>
          <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-black">
            Contact Us
          </h2>
          <h3 className="text-2xl text-center sm:text-3xl mb-6 mt-20 text-black">
            To Book your ride Call us on&nbsp;
            <a href="tel:+61459391456"
              ><u className="text-slate-700">0459 391 456</u></a>
          </h3>
          <p className="text-1xl text-center sm:text-2xl mb-6 text-black">
            Trust us for a reliable and enjoyable taxi service in Melbourne. Your
            journey begins with us!
          </p>
          <p className="text-1xl text-center sm:text-2xl mb-6 text-black">
            Your destination, our commitment.
          </p>
        </div>
      </div>
    </div>
  )
}

export default Contact