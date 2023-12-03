import { type IBusinessCanvas } from '@/types/business-canvas'
import { type ComponentName } from '@/types/component-name'
import { type RefObject, useEffect, useRef, useState } from 'react'
import { SendLink } from '../../buttons/send-link'
import { BcCard } from '../bc-card'
import styles from './bc-container.module.css'

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
  const [columHeight, setColumHeight] = useState(0)
  const [lineHeight, setLineHeight] = useState(0)
  const [cardHeight, setCardHeight] = useState(0)
  const [keyResourcesHeight, setKeyResourcesHeight] = useState(0)
  const [keyActivitiesHeight, setKeyActivitiesHeight] = useState(0)
  const colunsRefs = [useRef<HTMLDivElement>(null), useRef<HTMLDivElement>(null)]
  const isWide = windowWidth >= 1200

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (colunsRefs.every(ref => ref.current) && isWide) {
      const columHeights = colunsRefs.map((ref) => ref.current?.offsetHeight ?? 0)
      const maxColumHeight = Math.max(...columHeights)
      setColumHeight(maxColumHeight / 10)
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [
    isWide,
    ...colunsRefs.map((ref) => ref.current)
  ])

  const renderColumn = (keys: ComponentName[], refIndex?: number): React.ReactNode => (
    <div className={styles.colum} style={ columHeight ? { height: `${columHeight}rem` } : undefined} ref={refIndex !== undefined ? colunsRefs[refIndex] : undefined}>
      {renderCards(keys)}
    </div>
  )

  const handleCardRefChange = (ref: RefObject<HTMLDivElement>, key: string): void => {
    if ((key === 'revenueStreams' || key === 'costStructure') && cardHeight === 0) {
      setCardHeight(ref.current?.offsetHeight ?? 0)
      setLineHeight((lineH) => Math.max(lineH, ref.current?.offsetHeight ?? 0) / 10)
    }
    if (key === 'keyResources' || key === 'keyActivities') {
      const height = ref.current?.offsetHeight ?? 0
      if (key === 'keyResources') setKeyResourcesHeight(height)
      if (key === 'keyActivities') setKeyActivitiesHeight(height)

      const totalHeight = (keyResourcesHeight + keyActivitiesHeight) / 10
      if (totalHeight > columHeight) {
        setColumHeight(totalHeight + 1.2)
      }
    }
  }

  const renderCards = (keys: ComponentName[]): React.ReactNode => (
    keys.map((key) => (
      <BcCard
        key={key}
        title={componentMapping[key].title}
        contents={businessCanvas[key]}
        margin={componentMapping[key].margin}
        onCardRefChange={ref => { handleCardRefChange(ref, key) }}
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
          {!isWide && <div className={styles.line} style={lineHeight ? { height: `${lineHeight}rem` } : undefined}>{renderCards(['keyActivities', 'keyResources'])}</div>}
          {!isWide && <div className={styles.line} style={lineHeight ? { height: `${lineHeight}rem` } : undefined}>{renderCards(['customerRelationships', 'channels'])}</div>}
          <div className={styles.line} style={lineHeight ? { height: `${lineHeight}rem` } : undefined}>{renderCards(['revenueStreams', 'costStructure'])}</div>
        </div>
      </div>
      <SendLink label='Criar Outro' url='/'/>
    </div>
  )
}
