import styles from './submit.module.css'

interface Props {
  label: string
  width: string
}

export const Submit: React.FC<Props> = ({ label, width }: Props) => {
  return (
    <input type='submit' value={label} style={{ width }} className={styles.submit}/>
  )
}
