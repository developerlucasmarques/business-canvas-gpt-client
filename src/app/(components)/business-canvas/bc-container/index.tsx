import { type IBusinessCanvas } from '@/types/business-canvas'
import { type ComponentName } from '@/types/component-name'
import { useEffect, useState, type RefObject } from 'react'
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

type ICardHeight = Record<ComponentName, number>

export const BcContainer: React.FC<Props> = ({ businessCanvas }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [columHeight, setColumHeight] = useState(0)
  const [lineHeight] = useState(0)
  const [cardHeight, setCardHeight] = useState<ICardHeight>({} as unknown as ICardHeight)
  const isWide = windowWidth >= 100

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isWide, windowWidth, cardHeight])

  const renderColumn = (keys: ComponentName[]): React.ReactNode => (
    <div className={styles.colum} style={ columHeight ? { height: `${columHeight}rem` } : undefined}>
      {renderCards(keys)}
    </div>
  )

  const handleCardHeigh = (key: ComponentName, offsetHeight: number): void => {
    const copy = { ...cardHeight }
    copy[key] = offsetHeight
    setCardHeight(copy)
    const colum1Height = ((cardHeight.keyResources + cardHeight.keyActivities) / 10) + 1.2
    const colum2Height = ((cardHeight.channels + cardHeight.customerRelationships)) / 10 + 1.2
    const largestColumn = Math.max(colum1Height, colum2Height)
    const largestCard = Math.max(cardHeight.keyPartnerships, cardHeight.valuePropositions, cardHeight.customerSegments) / 10
    const maxHeight = Math.max(largestColumn, largestCard)
    if (maxHeight > columHeight) {
      setColumHeight(maxHeight)
    }
  }

  const handleCardRefChange = (ref: RefObject<HTMLDivElement>, key: ComponentName): void => {
    if (key !== 'revenueStreams' && key !== 'costStructure') {
      handleCardHeigh(key, ref.current?.offsetHeight ?? 0)
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
          {isWide && renderColumn(['keyActivities', 'keyResources'])}
          {renderColumn(['valuePropositions'])}
          {isWide && renderColumn(['customerRelationships', 'channels'])}
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
