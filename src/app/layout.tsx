import './globals.css'

import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'

import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Business Canva Model',
  description: 'Crie um modelo de negócios usando inteligência artificial',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
