import styles from './login-button.module.css'
import Link from 'next/link'
import icon from './login-icon.png'
import Image from 'next/image'

export const LoginButton: React.FC = () => {
  return (
  <div className={`${styles.loginButton} flex justify-center`}>
    <Link href={'/login'} className={'flex justify-center items-center'}>
      <Image className={styles.loginIcon} src={icon} alt="" />
      <p className='ml-1'>Entrar</p>
    </Link>
  </div>
  )
}
