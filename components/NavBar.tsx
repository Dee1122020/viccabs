import React from 'react'
import Link from 'next/link'
import HamburgerButton from './HamburgerButton'

function NavBar() {
  return (
    <nav className='h-20 flex flex-row justify-between items-center px-6 py-1'>
        <div className='text-3xl font-semibold ml-8'>
            <h1><Link href="/" className='link cursor-pointer hover:opacity-60' >Vic Cabs</Link></h1>
        </div>

        <HamburgerButton />
        
        <div className='mr-6'>
            <ul className='text-2xl font-medium flex flex-row gap-6'>
                <li>
                    <Link href="/" className='link cursor-pointer hover:opacity-40' >Home</Link>
                </li>
                <li>
                    <Link href="/pages/about" className='link cursor-pointer hover:opacity-40' >About Us</Link>
                </li>
                <li>
                    <Link href="/pages/services" className='link cursor-pointer hover:opacity-40' >Services</Link>
                </li>
                <li>
                    <Link href="/pages/whyChoose" className='link cursor-pointer hover:opacity-40' >Why Choose Us</Link>
                </li>
                <li>
                    <Link href="/pages/contact" className='link cursor-pointer hover:opacity-40' >Contact Us</Link>
                </li>
            </ul>
        </div>

    </nav>
  )
}

export default NavBar