import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Link from 'next/link'
import Footer from './components/Footer'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'My Next app',
  description: 'Created by the one and only Bee',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
        
      <body className={inter.className}>
      <nav className='space-x-4 border-b-2 border-b-gray-400 p-4'>
        <Link href='/'>
          Home
        </Link>
        <Link href='/about'>
          About
        </Link>
        <Link href='/dogdata'>
          Dog
        </Link> 
        <Link href='/users'>
          Users
        </Link>
        <Link href='/profile'>
          Profile
        </Link>
        </nav>
      {children}

      <Footer />
      </body>
    </html>
  )
}
