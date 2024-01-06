import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-blue-950 text-gray-300 p-5">
        <div className="p-4 flex flex-row sm:flex:row sm:justify-between">
          <address className='not-italic ml-5'>
            <section className='mb-2'>
              <h2 className='text-2xl'>Victoria Cabs</h2>
              <p>Melbourne<br/>Victoria 3000
              </p>
            </section>
            <section className='mb-2'>
              <p>
              Email:&nbsp;
              <Link href="mailto:inquiries@viccabs.com.au"
                >inquiries@viccabs.com.au</Link>
              </p>
            </section>
            <section>
              <p>Phone: <Link href="tel:+611300121213">1300121213</Link>
              </p>
            </section>
            
          </address>
          <nav className="hidden md:flex flex-col gap-2 text-2xl" aria-label="footer">
            <Link href="/pages/about" className='link cursor-pointer hover:opacity-40' >
              About Us
            </Link>
            <Link href="/pages/services" className='link cursor-pointer hover:opacity-40' >Services</Link>
            <Link href="/pages/contact" className='link cursor-pointer hover:opacity-40' >Contact Us</Link>
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