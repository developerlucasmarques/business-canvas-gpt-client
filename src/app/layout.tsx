import { Poppins } from 'next/font/google'
import Head from 'next/head'
import { Footer } from './(components)/footer'
import { Header } from './(components)/header'
import './globals.css'

const fontFamily = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: 'normal'
})

interface Props {
  children: React.ReactNode
}

const RootLayout: React.FC<Props> = ({ children }: Props) => {
  return (
    <html lang='en' className={fontFamily.className}>
      <Head>
        <title>Business Canva Model</title>
        <meta name="title" content="Business Canva Model" />
        <meta name="description" content="Crie um modelo de negócios usando Inteligência Artificial" />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://metatags.io/" />
        <meta property="og:title" content="Business Canva Model" />
        <meta property="og:description" content="Crie um modelo de negócios usando Inteligência Artificial" />
        <meta property="og:image" content="https://metatags.io/images/meta-tags.png" />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://metatags.io/" />
        <meta property="twitter:title" content="Business Canva Model" />
        <meta property="twitter:description" content="Crie um modelo de negócios usando Inteligência Artificial" />
        <meta property="twitter:image" content="https://metatags.io/images/meta-tags.png" />
      </Head>
      <body>
        <Header/>
          <main className='mainContainer'>
            {children}
          </main>
        <Footer/>
      </body>
    </html>
  )
}

export default RootLayout
