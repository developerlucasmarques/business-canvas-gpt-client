import styles from './bc-card.module.css'

interface Props {
  title: string
  contents: string[]
  heightCard: boolean
  margin?: boolean
}

export const BcCard: React.FC<Props> = ({ title, contents, heightCard, margin }: Props) => {
  return (
  <div
    className={`${styles.card}`}
    style={{
      height: (heightCard) ? '100%' : '100%', marginBottom: (margin) ? '1.2rem' : '0'
    }}
  >
    <h2>{title}</h2>
    {contents.map((content, index) => (<p key={index}>{content}</p>))}
  </div>
  )
}
