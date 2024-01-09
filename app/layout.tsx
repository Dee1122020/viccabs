import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import NavMenu from '@/components/NavMenu'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Victoria Cabs',
  description: 'Book your taxi now at Victoria Cabs',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={outfit.className}>
        <main className='bg-black text-gray-400'>
        <NavMenu/>
        {children}
        <Footer/>
        </main>
      </body>
    </html>
  )
}
