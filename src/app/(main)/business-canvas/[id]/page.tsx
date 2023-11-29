'use client'
import { BcCard } from '@/app/(components)/business-canvas/bc-card'
import { SendLink } from '@/app/(components)/buttons/send-link'
import { useBusinessCanvasCtx } from '@/app/(contexts)/business-canvas-context'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { baseUrl } from '@/app/api/env'
import styles from '@/styles/business-canvas.module.css'
import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type IBusinessCanvas } from '@/types/business-canvas'
import { useEffect, useState } from 'react'

type ComponentName =
  | 'customerSegments'
  | 'valuePropositions'
  | 'channels'
  | 'customerRelationships'
  | 'revenueStreams'
  | 'keyResources'
  | 'keyActivities'
  | 'keyPartnerships'
  | 'costStructure'

interface IMap {
  title: string
  heightCard: boolean
  margin?: boolean
}

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

interface Props {
  params: {
    id: string
  }
}

const BusinessCanvasById: React.FC<Props> = ({ params }: Props) => {
  const [businessCanvas, setBusinessCanvas] = useState<IBusinessCanvas>(datas)
  const { accessToken } = useUserInfoCtx()
  const businessCanvasCtx = useBusinessCanvasCtx()

  const getData = async (): Promise<void> => {
    if (businessCanvasCtx?.businessCanvas) {
      setBusinessCanvas(businessCanvasCtx.businessCanvas)
      return
    }
    const response = await fetch(`${baseUrl}/business-canvas/${params.id}`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }
    })
    const res: ErrorReponse | IBusinessCanvas = await response.json()
    if ('error' in res) {
      console.log('FAILS', res)
      return
    }
    setBusinessCanvas(res)
  }

  useEffect(() => {
    getData().catch(console.error)
  }, [])

  const renderCards = (keys: ComponentName[], heightCard: boolean): React.JSX.Element[] => {
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
        <h1>{businessCanvas.name }</h1>
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

export default BusinessCanvasById

const datas = {
  id: 'id',
  name: 'Empresa de Software',
  customerSegments: [
    'Pequenas empresas de varejo',
    'Redes de lojas',
    'Empresas de e-commerce'
  ],
  valuePropositions: [
    'Desenvolvimento de sistemas web personalizados para atender às necessidades específicas de cada empresa de varejo',
    'Melhoria da eficiência operacional por meio da automação de processos',
    'Aumento das vendas e satisfação do cliente através de uma melhor experiência online'
  ],
  channels: [
    'Website e landing pages',
    'Social media',
    'Parcerias com empresas de TI e mídia especializadas em varejo'
  ],
  customerRelationships: [
    'Suporte técnico via chat, e-mail e telefone',
    'Atendimento ao cliente personalizado para entender melhor as necessidades e oferecer soluções adequadas',
    'Fornecer atualizações e melhorias contínuas nos sistemas web'
  ],
  revenueStreams: [
    'Venda dos sistemas web',
    'Taxas mensais de manutenção e suporte',
    'Contratos de consultoria para implementação e integração dos sistemas'
  ],
  keyResources: [
    'Equipe de desenvolvedores web',
    'Conhecimento especializado em varejo e tecnologia',
    'Servidores e infraestrutura de TI'
  ],
  keyActivities: [
    'Análise das necessidades das empresas de varejo',
    'Design e desenvolvimento dos sistemas web',
    'Implantação e integração dos sistemas'
  ],
  keyPartnerships: [
    'Parcerias com empresas de TI para acesso a tecnologias e ferramentas',
    'Parcerias com empresas de logística para integração de sistemas de gestão de estoque',
    'Parcerias com empresas de pagamento online para facilitar transações'
  ],
  costStructure: [
    'Salários da equipe de desenvolvedores',
    'Custos de marketing e publicidade',
    'Investimentos em tecnologia e infraestrutura'
  ]
}
