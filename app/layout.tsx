import type { Metadata } from 'next'
import { Outfit } from 'next/font/google'
import './globals.css'
import Footer from '@/components/Footer'
import NavMenu from '@/components/NavMenu'

const outfit = Outfit({ subsets: ['latin'] })

export const metadata: Metadata = {
  metadataBase: new URL('https://viccabs.com.au'),
  title: {
    default: 'Victoria Cabs | Premier Melbourne Transport',
    template: '%s | Victoria Cabs | Premier Melbourne Transport'
  },
  description: 'Victoria Cabs - Premier transport in Melbourne. Luxurious taxis, chauffeurs, and SUVs. Book now! Call 1300 121 213 for unparalleled journeys.',
  applicationName: 'Viccabs',
  keywords: ['chauffeur melbourne', 'chauffeur service melbourne', 'chauffeur cars melbourne', 'chauffeured cars melbourne', 'chauffeur car melbourne airport', 'chauffeurs melbourne', 'corporate chauffeur service', 'taxi booking melbourne', 'taxi booking melbourne airport', 'book a taxi to melbourne airport', 'melbourne taxi booking'],
  authors: [{ name: 'Sarfaraj Shahjahan' }],
  creator: 'Victoria Cabs',
  publisher: 'Victoria Cabs',
  alternates: {
    canonical: '/',
    languages: {
      'en-US': '/en-US',
    },
  },

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
