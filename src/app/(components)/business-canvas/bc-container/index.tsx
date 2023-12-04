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
  const is1200 = windowWidth >= 1200
  const is1000 = windowWidth >= 1000
  const is680 = windowWidth >= 680

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    if (!is1200) {
      setComponentMapping((prev) => ({
        ...prev,
        customerRelationships: {
          ...prev.customerRelationships,
          margin: false
        },
        keyActivities: {
          ...prev.keyActivities,
          margin: false
        }
      }))
    } else {
      setComponentMapping((prev) => ({
        ...prev,
        customerRelationships: {
          ...prev.customerRelationships,
          margin: true
        },
        keyActivities: {
          ...prev.keyActivities,
          margin: true
        }
      }))
    }
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [is1200])

  const renderColumn = (keys: ComponentName[]): React.ReactNode => (
    <div className={styles.colum} >
      {renderCards(keys)}
    </div>
  )

  const renderLine = (keys: ComponentName[]): React.ReactNode => (
    <div className={styles.line} >
      {renderCards(keys)}
    </div>
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

  return (
    <div className={`${styles.container} flex justify-center flex-col items-center`}>
      <h1>{businessCanvas.name}</h1>
      <div className={styles.businessCanvasContainer}>
        <div className={styles.businessCanvasColumnsContainer}>
          {is1000 && renderColumn(['keyPartnerships'])}
          {is1200 && renderColumn(['keyActivities', 'keyResources'])}
          {renderColumn(['valuePropositions'])}
          {is1200 && renderColumn(['customerRelationships', 'channels'])}
          {is1000 && renderColumn(['customerSegments'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is680 && renderLine(['keyPartnerships'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is680 && renderLine(['customerSegments'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is680 && renderLine(['keyActivities'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is680 && renderLine(['keyResources'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is680 && renderLine(['customerRelationships'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is680 && renderLine(['channels'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is680 && renderLine(['costStructure'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is680 && renderLine(['revenueStreams'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is1000 && is680 && renderLine(['keyPartnerships', 'customerSegments'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is1200 && is680 && renderLine(['keyActivities', 'keyResources'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {!is1200 && is680 && renderLine(['customerRelationships', 'channels'])}
        </div>
        <div className={styles.businessCanvasLinesContainer}>
          {is680 && renderLine(['revenueStreams', 'costStructure'])}
        </div>
      </div>
      <SendLink label='Criar Outro' url='/'/>
    </div>
  )
}
