import { type IBusinessCanvas } from '@/types/business-canvas'
import { SendLink } from '../../buttons/send-link'
import { type ComponentName } from '@/types/component-name'
import { BcCard } from '../bc-card'
import styles from './bc-container.module.css'
import { useEffect, useRef, useState } from 'react'

interface Props {
  businessCanvas: IBusinessCanvas
}

interface IMap {
  title: string
  margin?: boolean
}

const componentMapping: Record<string, IMap> = {
  customerSegments: { title: 'Segmentos dos Clientes' },
  valuePropositions: { title: 'Proposta de Valor' },
  channels: { title: 'Canais' },
  customerRelationships: { title: 'Relacionamento com Clientes', margin: true },
  revenueStreams: { title: 'Fontes de Receita' },
  keyResources: { title: 'Principais Recursos' },
  keyActivities: { title: 'Principais Atividades', margin: true },
  keyPartnerships: { title: 'Parcerias-Chaves' },
  costStructure: { title: 'Estrutura de custos' }
}

export const BcContainer: React.FC<Props> = ({ businessCanvas }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [columHeight, setColumHeight] = useState({ height: '' })
  const [lineHeight, setLineHeight] = useState({ height: '' })
  const colunsRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]
  const keys = Object.keys(businessCanvas) as ComponentName[]
  const cardRefs = keys.map(() => useRef<HTMLDivElement>(null))
  const isWide = windowWidth >= 1200

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (colunsRefs.every(ref => ref.current) && isWide) {
      const heights = colunsRefs.map((ref) => ref.current?.offsetHeight ?? 0)
      const maxColumHeight = Math.max(...heights)
      setColumHeight({ height: `${maxColumHeight / 10}rem` })
      const cardHeights = cardRefs.map((ref) => ref.current?.clientHeight ?? 0)
      const maxCardHeight = Math.max(...cardHeights)
      setLineHeight({ height: `${maxCardHeight / 10}rem` })
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [
    windowWidth, isWide,
    ...colunsRefs.map((ref) => ref.current),
    ...cardRefs.map((ref) => ref.current)
  ])

  const renderColumn = (keys: ComponentName[], refIndex?: number): React.ReactNode => (
    <div className={styles.colum} style={columHeight} ref={refIndex !== undefined ? colunsRefs[refIndex] : undefined}>
      {renderCards(keys)}
    </div>
  )

  const renderCards = (keys: ComponentName[]): React.ReactNode => (
    keys.map((key, index) => (
      <BcCard
        key={key}
        title={componentMapping[key].title}
        contents={businessCanvas[key]}
        margin={componentMapping[key].margin}
        cardRef={cardRefs[index]}
      />
    ))
  )

  return (
    <div className={`${styles.container} flex justify-center flex-col items-center`}>
      <h1>{businessCanvas.name}</h1>
      <div className={styles.businessCanvasContainer}>
        <div className={styles.businessCanvasColumnsContainer}>
          {renderColumn(['keyPartnerships'])}
          {isWide && renderColumn(['keyActivities', 'keyResources'], 0)}
          {renderColumn(['valuePropositions'])}
          {isWide && renderColumn(['customerRelationships', 'channels'], 1)}
          {renderColumn(['customerSegments'])}
        </div>
        <div>
          {!isWide && <div className={styles.line}>{renderCards(['keyActivities', 'keyResources'])}</div>}
          {!isWide && <div className={styles.line}>{renderCards(['customerRelationships', 'channels'])}</div>}
          <div className={styles.line} style={lineHeight}>{renderCards(['revenueStreams', 'costStructure'])}</div>
        </div>
      </div>
      <SendLink label='Criar Outro' url='/'/>
    </div>
  )
}
