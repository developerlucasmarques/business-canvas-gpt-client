import Loading from '@/app/loading'
import styles from './loading-overlay.module.css'

interface Props {
  label: string
}

export const LoadingOverlay: React.FC<Props> = ({ label }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Carregando...</h1>
        <Loading/>
        <p className={styles.label}>{label}</p>
      </div>
    </div>
  )
}
