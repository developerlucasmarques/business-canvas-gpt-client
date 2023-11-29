import styles from './loading-overlay.module.css'

interface Props {
  label: string
}

export const LoadingOverlay: React.FC<Props> = ({ label }: Props) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Carregando...</h1>
      <p className={styles.label}>{label}</p>
    </div>
  )
}
