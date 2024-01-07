import React from 'react'
import HamburgerButton from './HamburgerButton'
import Link from 'next/link'

function NavBarMain() {
  return (
    <section className='mx-auto p-4 flex justify-between items-center max-w-7xl'>
 
        <h1 className='text-3xl font-semibold'>
            <Link href="/" className='link cursor-pointer hover:opacity-60' >Vic Cabs</Link>
        </h1>
            
                
        <div>

        <HamburgerButton />

          <nav className='hidden md:block text-2xl font-medium space-x-6' aria-label="main">
              <Link href="/" className='link cursor-pointer hover:opacity-40' >Home</Link>
              <Link href="/pages/about" className='link cursor-pointer hover:opacity-40' >About Us</Link>
              <Link href="/pages/services" className='link cursor-pointer hover:opacity-40' >Services</Link>
              <Link href="/pages/whyChoose" className='link cursor-pointer hover:opacity-40' >Why Choose Us</Link>
              <Link href="/pages/contact" className='link cursor-pointer hover:opacity-40' >Contact Us</Link>
          </nav>
        </div>

    </section>
  )
}

export default NavBarMain