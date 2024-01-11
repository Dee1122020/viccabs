import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-blue-950 text-gray-300 p-5">
        <div className="max-w-7xl mx-auto p-4 flex flex-row justify-between">
          <address className='not-italic'>
            <section className='mb-2'>
              <Link href='/pages/about' className='text-2xl cursor-pointer hover:opacity-60'>Vic Cabs</Link>
              <p>Melbourne<br/>Victoria 3000
              </p>
            </section>
            <section className='mb-2'>
              <p>
              Email:&nbsp;
              <Link href="mailto:admin@viccabs.com.au"
                >admin@viccabs.com.au</Link>
              </p>
            </section>
            <section>
              <p>Phone: <Link href="tel:+611300121213">1300121213</Link>
              </p>
            </section>
            
          </address>
          <nav className="hidden md:flex flex-col gap-1 text-xl font-normal" aria-label="footer">
            <Link href="/" className='cursor-pointer hover:opacity-40' >
              Home
            </Link>
            <Link href="/pages/about" className='cursor-pointer hover:opacity-40' >About Us</Link>
            <Link href="/pages/services" className='cursor-pointer hover:opacity-40' >Services</Link>
            <Link href="/pages/whyChoose" className='cursor-pointer hover:opacity-40' >Why Choose Us</Link>
            <Link href="/pages/contact" className='cursor-pointer hover:opacity-40' >Contact Us</Link>
          </nav>
          <div className="flex flex-col sm:gap-2 m-2">
            <p className="text-right">Copyright &copy; <span id="year">2024</span></p>
            <p className="text-right">All Rights Reserved</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default Footer