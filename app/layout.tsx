import type { Metadata } from 'next'
import { Inter, Outfit } from 'next/font/google'
import './globals.css'
import NavBar from '@/components/NavBar'

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
        <NavBar/>
        {children}
        </body>
    </html>
  )
}
