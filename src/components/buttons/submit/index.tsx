import styles from './submit.module.css'

interface Props {
  label: string
}

export const Submit: React.FC<Props> = ({ label }: Props) => {
  return (
    <button className={styles.submit}>{label}</button>
  )
}
