import styles from './submit.module.css'

interface Props {
  label: string
  width: string
  disabled?: boolean
}

export const Submit: React.FC<Props> = ({ label, width, disabled }: Props) => {
  return (
    <input disabled={disabled} type='submit' value={label} style={{ width }} className={styles.submit}/>
  )
}
