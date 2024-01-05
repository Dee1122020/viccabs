import Link from 'next/link'
import React from 'react'

function Footer() {
  return (
    <div>
      <footer className="bg-blue-950 text-gray-300">
        <div className="mx-auto p-4 flex flex-row sm:flex:row sm:justify-between">
          <address>
            <h2>Victoria Cabs</h2>
            Melbourne<br />
            Victoria 3000<br />
            Email:
            <a href="mailto:inquiries@viccabs.com"
              >inquiries@viccabs.com</a><br />
            Phone: <a href="tel:+61459391456">0459 391 456</a><br />
            &emsp;&emsp;&ensp;&ensp;<a href="tel:+61403165754">0403 165 754</a>
          </address>
          <nav className="hidden md:flex flex-col gap-2" aria-label="footer">
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