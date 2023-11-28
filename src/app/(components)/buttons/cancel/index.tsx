import Link from 'next/link'
import styles from './cancel.module.css'

interface Props {
  width: string
  label: string
}

export const CancelLink: React.FC<Props> = ({ label, width }: Props) => {
  return (
  <div style={{ width }} className={styles.cancelLinkContainer}>
    <Link href='/'>{label}</Link>
  </div>
  )
}
