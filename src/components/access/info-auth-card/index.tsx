import { Logo } from '@/components/logo'
import styles from './info-auth-card.module.css'

interface Props {
  title: string
  info: string
}

export const InfoAuthCard: React.FC<Props> = ({ title, info }: Props) => {
  return (
    <div>
      <Logo url='/'/>
      <h1 className={`${styles.title}`}>{title}</h1>
      <p className={`${styles.subTitle}`}>{info}</p>
    </div>
  )
}
