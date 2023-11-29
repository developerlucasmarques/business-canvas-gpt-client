import Link from 'next/link'
import styles from './bc-list-card.module.css'

interface Props {
  id: string
  name: string
  createdAt: string
}

export const BcListCard: React.FC<Props> = ({ id, name, createdAt }: Props) => {
  return (
    <Link href={`/business-canvas/${id}`} className={styles.listCard}>
      <h3 className={styles.truncate}>{name}</h3>
      <p>{createdAt}</p>
    </Link>
  )
}
