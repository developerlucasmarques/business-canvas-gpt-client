import { type RefObject, useEffect, useRef, useState } from 'react'
import styles from './bc-card.module.css'

interface Props {
  title: string
  contents: string[]
  margin?: boolean
  onCardRefChange: (ref: RefObject<HTMLDivElement>) => void
}

export const BcCard: React.FC<Props> = ({ title, contents, margin, onCardRefChange }: Props) => {
  const cardRef = useRef<HTMLDivElement>(null)
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    onCardRefChange(cardRef)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [windowWidth, cardRef.current])

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
