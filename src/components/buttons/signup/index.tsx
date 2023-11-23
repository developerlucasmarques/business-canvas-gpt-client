import '@/app/globals.css'
import styles from './signup-button.module.css'
import Link from 'next/link'

interface Props {
  label: string
  url: string
}

export const SignUpButton: React.FC<Props> = ({ url, label }: Props) => {
  return (
    <Link href={url} className={`${styles.signUpButton} flex justify-center items-center`}>
      <p>{label}</p>
    </Link>
  )
}
