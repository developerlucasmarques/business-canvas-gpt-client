import '@/app/globals.css'
import { Footer } from '../footer'
import { Header } from '../header'
import { GlobalContextProvider } from '@/app/(context)/global-context'

interface Props {
  children: React.ReactNode
}

export const Layout: React.FC<Props> = ({ children }: Props) => {
  return (
    <GlobalContextProvider>
      <Header/>
        {children}
      <Footer/>
    </GlobalContextProvider>
  )
}
