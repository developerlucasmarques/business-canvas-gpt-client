import '@/app/globals.css'
import { Logo } from '@/components/logo'
import { AccountButton } from '../buttons/account'
import { SignUpButton } from '@/components/buttons/signup'
import styles from './header.module.css'

interface Props {
  accountButtonLabel: string
}

export const Header: React.FC<Props> = ({ accountButtonLabel }: Props) => {
  return (
    <header className={`${styles.header} `}>
      <div className={`${styles.content} flex justify-between items-center`}>
        <Logo url='/'/>
        <div className={`${styles.buttons} flex items-center`}>
          <AccountButton url='login' label={accountButtonLabel}/>
          <SignUpButton url='signup' label='Cadastre-se'/>
        </div>
      </div>
    </header>
  )
}
