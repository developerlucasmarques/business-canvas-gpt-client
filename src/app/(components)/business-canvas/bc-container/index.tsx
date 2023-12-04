import { type IBusinessCanvas } from '@/types/business-canvas'
import { type ComponentName } from '@/types/component-name'
import { useEffect, useState } from 'react'
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

export const BcContainer: React.FC<Props> = ({ businessCanvas }: Props) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const [componentMapping, setComponentMapping] = useState<Record<string, IMap>>({
    customerSegments: { title: 'Segmentos dos Clientes' },
    valuePropositions: { title: 'Proposta de Valor' },
    channels: { title: 'Canais' },
    customerRelationships: { title: 'Relacionamento com Clientes', margin: true },
    revenueStreams: { title: 'Fontes de Receita' },
    keyResources: { title: 'Principais Recursos' },
    keyActivities: { title: 'Principais Atividades', margin: true },
    keyPartnerships: { title: 'Parcerias-Chaves' },
    costStructure: { title: 'Estrutura de custos' }
  })
  const isGreaterThan1200 = windowWidth >= 1200
  const isGreaterThan1000 = windowWidth >= 1000
  const isGreaterThan680 = windowWidth >= 680

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    setComponentMapping((prev) => ({
      ...prev,
      customerRelationships: { ...prev.customerRelationships, margin: isGreaterThan1200 },
      keyActivities: { ...prev.keyActivities, margin: isGreaterThan1200 }
    }))
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isGreaterThan1200])

  const renderColumn = (keys: ComponentName[]): React.ReactNode => (
    <div className={styles.colum} >{renderCards(keys)}</div>
  )

  const renderLinesContainer = (keys: ComponentName[]): React.ReactNode => (
    <div className={styles.businessCanvasLinesContainer}>{renderLine(keys)}</div>
  )

  const renderLine = (keys: ComponentName[]): React.ReactNode => (
    <div className={styles.line} >{renderCards(keys)}</div>
  )

  const renderCards = (keys: ComponentName[]): React.ReactNode => (
    keys.map((key) => (
      <BcCard
        key={key}
        title={componentMapping[key].title}
        contents={businessCanvas[key]}
        margin={componentMapping[key].margin}
      />
    ))
  )
  const keysIsLessThan680 = ['keyPartnerships', 'customerSegments', 'keyActivities', 'keyResources', 'customerRelationships', 'channels', 'revenueStreams', 'costStructure']
  return (
    <div className={`${styles.container} flex justify-center flex-col items-center`}>
      <h1>{businessCanvas.name}</h1>
      <div className={styles.businessCanvasContainer}>
        <div className={styles.businessCanvasColumnsContainer}>
          {isGreaterThan1000 && renderColumn(['keyPartnerships'])}
          {isGreaterThan1200 && renderColumn(['keyActivities', 'keyResources'])}
          {renderColumn(['valuePropositions'])}
          {isGreaterThan1200 && renderColumn(['customerRelationships', 'channels'])}
          {isGreaterThan1000 && renderColumn(['customerSegments'])}
        </div>
        {!isGreaterThan680 && keysIsLessThan680.map(key => (
          <div className={styles.businessCanvasLinesContainer}>
            {renderLine([key as ComponentName])}
          </div>
        ))}
        {!isGreaterThan1000 && isGreaterThan680 && renderLinesContainer(['keyPartnerships', 'customerSegments'])}
        {!isGreaterThan1200 && isGreaterThan680 && renderLinesContainer(['keyActivities', 'keyResources'])}
        {!isGreaterThan1200 && isGreaterThan680 && renderLinesContainer(['customerRelationships', 'channels'])}
        {isGreaterThan680 && renderLinesContainer(['revenueStreams', 'costStructure'])}
      </div>
      <SendLink label='Criar Outro' url='/'/>
    </div>
  )
}
