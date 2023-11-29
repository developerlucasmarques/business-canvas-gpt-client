import { type IBusinessCanvas } from '@/types/business-canvas'
import { SendLink } from '../../buttons/send-link'
import { type ComponentName } from '@/types/component-name'
import { BcCard } from '../bc-card'
import styles from './bc-container.module.css'

interface Props {
  businessCanvas: IBusinessCanvas
}

interface IMap {
  title: string
  heightCard: boolean
  margin?: boolean
}

export const BcContainer: React.FC<Props> = ({ businessCanvas }: Props) => {
  const mapBusinessCanvas = (key: ComponentName): IMap => {
    const components: Record<string, IMap> = {
      customerSegments: { title: 'Segmentos dos Clientes', heightCard: true },
      valuePropositions: { title: 'Proposta de Valor', heightCard: true },
      channels: { title: 'Canais', heightCard: false },
      customerRelationships: { title: 'Relacionamento com Clientes', heightCard: false, margin: true },
      revenueStreams: { title: 'Fontes de Receita', heightCard: false },
      keyResources: { title: 'Principais Recursos', heightCard: false },
      keyActivities: { title: 'Principais Atividades', heightCard: false, margin: true },
      keyPartnerships: { title: 'Parcerias-Chaves', heightCard: true },
      costStructure: { title: 'Estrutura de custos', heightCard: false }
    }
    return {
      title: components[key].title,
      heightCard: components[key].heightCard,
      ...(components[key].margin && { margin: true })
    }
  }

  const renderCards = (keys: ComponentName[], heightCard: boolean): React.JSX.Element[] | null => {
    return keys.map((key) => (
        <BcCard
          key={key}
          title={mapBusinessCanvas(key).title}
          contents={businessCanvas[key]}
          heightCard={heightCard}
          margin={mapBusinessCanvas(key).margin}
        />
    ))
  }

  return (
  <div className={`${styles.container} flex justify-center flex-col items-center`}>
    <h1>{businessCanvas.name}</h1>
      <div className={styles.businessCanvasContainer}>
        <div className={`${styles.businessCanvasColumnsContainer}`}>
          <div className={`${styles.colum}`}>
            {renderCards(['keyPartnerships'], true)}
          </div>
          <div className={`${styles.colum}`}>
            {renderCards(['keyActivities', 'keyResources'], false)}
          </div>
          <div className={`${styles.colum}`}>
            {renderCards(['valuePropositions'], true)}
          </div>
          <div className={`${styles.colum}`}>
            {renderCards(['customerRelationships', 'channels'], false)}
          </div>
          <div className={`${styles.colum}`}>
            {renderCards(['customerSegments'], true)}
          </div>
        </div>
        <div>
        <div className={`${styles.line}`}>
            {renderCards(['revenueStreams', 'costStructure'], true)}
          </div>
        </div>
      </div>
    <SendLink label='Criar Outro' url='/'/>
  </div>
  )
}
