'use client'
import { BcCard } from '@/app/(components)/bc-card'
import { AccountButton } from '@/app/(components)/buttons/account'
import { MyBusinessCanvasButton } from '@/app/(components)/buttons/my-business-canvas'
import { SendLink } from '@/app/(components)/buttons/send-link'
import { Layout } from '@/app/(components)/layout'
import styles from '@/styles/business-canvas.module.css'
import { useState } from 'react'

interface IBusinessCanvas {
  name: string
  customerSegments: string[]
  valuePropositions: string[]
  channels: string[]
  customerRelationships: string[]
  revenueStreams: string[]
  keyResources: string[]
  keyActivities: string[]
  keyPartnerships: string[]
  costStructure: string[]
}

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

const BusinessCanvas: React.FC = () => {
  const [businessCanvas] = useState<IBusinessCanvas>(datas)

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

  const headerButtons = [
    <MyBusinessCanvasButton key="myCanvasButton" url='/my-business-canvas'/>,
    <AccountButton key="accountButton" label='Convidado' url='/user'/>
  ]

  return (
    <Layout headerButtonComponents={headerButtons}>
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
        <SendLink label='Criar Outro' url='/criar'/>
      </div>
    </Layout>
  )
}

export default BusinessCanvas

const datas = {
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
