import Link from 'next/link'
import React from 'react'

function NavBarMobile() {
  return (
    <section
        id="mobile-menu"
        className="absolute top-[68px] bg-black w-full text-5xl flex-col justify-content-center origin-top animate-open-menu hidden"
      >
        
        <nav
          className="flex flex-col min-h-screen items-center py-8"
          aria-label="mobile"
        >
          <Link href="/" className="w-full text-center py-6 hover:opacity-40"
            >Home</Link>

          <Link href="/pages/about" className="w-full text-center py-6 hover:opacity-40 capitalize"
            >about us</Link>

          <Link href="/pages/services" className="w-full text-center py-6 hover:opacity-40 capitalize"
            >services</Link>

          <Link
            href="/pages/whyChoose"
            className="w-full text-center py-6 hover:opacity-40"
            >Why Choose Us</Link>

          <Link href="/pages/contact" className="w-full text-center py-6 hover:opacity-40"
            >Contact Us</Link>

        </nav>

      </section>
  )
}

export default NavBarMobile