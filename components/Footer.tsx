import Link from 'next/link'
import React from 'react'

function Footer() {

  const currentYear = new Date().getFullYear()
  
  return (
    <div>
      <footer className="bg-blue-950 text-gray-300 p-4 md:p-5">
        <div className="max-w-7xl mx-auto p-3 md:p-4 flex flex-col md:flex-row justify-between gap-6 md:gap-4">
          <address className='not-italic'>
            <section className='mb-3 md:mb-2'>
              <Link href='/pages/about' className='text-xl md:text-2xl cursor-pointer hover:opacity-60 mb-1 md:mb-2 block'>Vic Cabs</Link>
              <p className='text-sm md:text-base'>17 Cleaveland Street<br/>St Albans<br/>Victoria 3021
              </p>
            </section>
            <section className='mb-3 md:mb-2'>
              <p className='text-sm md:text-base'>
              Email:&nbsp;
              <Link href="mailto:admin@viccabs.com.au"
                >admin@viccabs.com.au</Link>
              </p>
            </section>
            <section>
              <p className='text-sm md:text-base'>Phone: <Link href="tel:+61391148670">03 9114 8670</Link></p>
              {/*<p className='text-sm md:text-base'>Mobile: <Link href="tel:+61470445670">0470 445 670</Link></p>*/}
            </section>
            
          </address>
          <nav className="flex flex-col gap-2 md:gap-1 text-base md:text-xl font-normal" aria-label="footer">
            <Link href="/" className='cursor-pointer hover:opacity-40 py-1 md:py-0' >
              Home
            </Link>
            <Link href="/pages/about" className='cursor-pointer hover:opacity-40 py-1 md:py-0' >About Us</Link>
            <Link href="/pages/services" className='cursor-pointer hover:opacity-40 py-1 md:py-0' >Services</Link>
            <Link href="/pages/whyChoose" className='cursor-pointer hover:opacity-40 py-1 md:py-0' >Why Choose Us</Link>
            <Link href="/pages/contact" className='cursor-pointer hover:opacity-40 py-1 md:py-0' >Contact Us</Link>
          </nav>
          <div className="flex flex-col gap-1 md:gap-2 mt-2 md:mt-0">
            <p className="text-center md:text-right text-sm md:text-base">Copyright &copy; <span id="year">{currentYear}</span></p>
            <p className="text-center md:text-right text-sm md:text-base">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer