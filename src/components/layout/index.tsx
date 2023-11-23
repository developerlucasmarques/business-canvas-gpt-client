import '@/app/globals.css'
import { Footer } from '../footer'
import { Header } from '../header'

interface Props {
  children: React.ReactElement
  headerButtonComponents: React.ReactNode[]
}

export const Layout: React.FC<Props> = ({ children, headerButtonComponents }: Props) => {
  return (
    <>
      <Header buttonComponents={headerButtonComponents}/>
        <main className='mainContainer'>{children}</main>
      <Footer/>
    </>
  )
}
