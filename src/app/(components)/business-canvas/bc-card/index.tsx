import styles from './bc-card.module.css'

interface Props {
  title: string
  contents: string[]
  margin?: boolean
  cardRef: React.RefObject<HTMLDivElement>
}

export const BcCard: React.FC<Props> = ({ title, contents, margin, cardRef }: Props) => {
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
