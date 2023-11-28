'use client'
import '@/app/globals.css'
import styles from './signup-button.module.css'
import Link from 'next/link'

export const SignUpButton: React.FC = () => {
  return (
    <Link href='/signup' className={`${styles.signUpButton} flex justify-center items-center`}>
      <p>Cadastre-se</p>
    </Link>
  )
}
