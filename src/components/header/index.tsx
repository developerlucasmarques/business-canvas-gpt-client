import '@/app/globals.css'
import { Logo } from '@/components/logo'
import styles from './header.module.css'

interface Props {
  buttonComponents: React.ReactNode[]
}

export const Header: React.FC<Props> = ({ buttonComponents }: Props) => {
  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.content} flex justify-between items-center`}>
        <Logo url='/'/>
        <div className={`${styles.buttons} flex items-center`}>
          {buttonComponents?.map(component => component)}
        </div>
      </div>
    </header>
  )
}
