import { useRef } from 'react'
import styles from './bc-card.module.css'

interface Props {
  title: string
  contents: string[]
  margin?: boolean
}

export const BcCard: React.FC<Props> = ({ title, contents, margin }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null)

  return (
  <div
    className={`${styles.card}`}
    style={{ marginBottom: (margin) ? '1.2rem' : '0' }}
    ref={cardRef}
  >
    <h2>{title}</h2>
    {contents.map((content, index) => (<p key={index}>{content}</p>))}
  </div>
  )
}
