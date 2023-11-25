import styles from './submit.module.css'

interface Props {
  label: string
}

export const Submit: React.FC<Props> = ({ label }: Props) => {
  return (
    <input type='submit' value={label} className={styles.submit}/>
  )
}
