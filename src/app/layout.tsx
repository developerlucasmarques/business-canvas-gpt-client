import './globals.css'
import type { Metadata } from 'next'
import { Poppins } from 'next/font/google'
import { Footer } from '@/components/footer'
import { Header } from '@/components/header'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700', '800']
})

export const metadata: Metadata = {
  title: 'Business Canva Model',
  description: 'Crie um modelo de negócios usando inteligência artificial'
}

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = (props: Props) => {
  return (
    <html lang="en">
      <body className={`${poppins.className} flex min-h-screen flex-col`}>
        <Header />
        {props.children}
        <Footer />
      </body>
    </html>
  )
}

export default RootLayout
