import '@/app/globals.css'
import Link from 'next/link'
import styles from './logo.module.css'
import Image from 'next/image'
import LogoImage from './logo.png'

interface Props {
  url: string
}

export const Logo: React.FC<Props> = ({ url }: Props) => {
  return (
  <div>
    <Link href={url} className={styles.logo}>
      <Image className={styles.logoImg} src={LogoImage} alt=''/>
    </Link>
  </div>
  )
}
