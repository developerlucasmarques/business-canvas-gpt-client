import { BcListCard } from '@/components/bc-list-card'
import { AccountButton } from '@/components/buttons/account'
import { MyBusinessCanvasButton } from '@/components/buttons/my-business-canvas'
import { SendLink } from '@/components/buttons/send-link'
import { Layout } from '@/components/layout'
import { useState } from 'react'
import styles from '@/styles/all-business-canvas.module.css'

const AllBusinessCanvas: React.FC = () => {
  const [canvas] = useState(canvasList)

  return (
    <Layout headerButtonComponents={[
      <MyBusinessCanvasButton key="myCanvasButton" url='/my-business-canvas'/>,
      <AccountButton key="accountButton" label='Convidado' url='/user'/>
    ]}>
      <div className={styles.container}>
        <h1 >Business Canvas Criado</h1>
        {canvas.map((item, index) => (
          <BcListCard key={index} id={item.id} name={item.name} createdAt={item.createdAt}/>
        ))}
        <SendLink label='Criar Novo' url='/criar'/>
      </div>
    </Layout>
  )
}

export default AllBusinessCanvas

const canvasList = [
  { id: '1', name: 'Empresa de Software', createdAt: '01/02/2023' },
  { id: '2', name: 'Empresa de Software', createdAt: '01/02/2023' },
  { id: '3', name: 'Empresa de Software', createdAt: '01/02/2023' }
]
