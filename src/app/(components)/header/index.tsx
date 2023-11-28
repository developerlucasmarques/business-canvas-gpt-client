import { Logo } from '@/app/(components)/logo'
import styles from './header.module.css'
import { NavBar } from '../nav-bar'

export const Header: React.FC = () => {
  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.content} flex justify-between items-center`}>
        <Logo url='/'/>
        <div className={`${styles.buttons} flex items-center`}>
          <NavBar/>
        </div>
      </div>
    </header>
  )
}
