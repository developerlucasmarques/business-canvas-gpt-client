import Link from 'next/link'
import styles from './send-link.module.css'

interface Props {
  label: string
  url: string
}

export const SendLink: React.FC<Props> = ({ label, url }: Props) => {
  return (
    <Link className={styles.send} href={url}>{label}</Link>
  )
}
