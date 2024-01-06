import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'
import Footer from '@/components/Footer'
import Header from '@/components/Header'

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
        <main className='min-h-screen bg-black text-gray-400'>
        <Header/>
        {children}
        <Footer/>
        </main>
      </body>
    </html>
  )
}
