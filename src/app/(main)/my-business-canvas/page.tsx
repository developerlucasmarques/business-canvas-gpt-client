'use client'
import { BcListCard } from '@/app/(components)/bc-list-card'
import { SendLink } from '@/app/(components)/buttons/send-link'
import styles from '@/styles/all-business-canvas.module.css'
import { useState } from 'react'

const MyBusinessCanvas: React.FC = () => {
  const [canvas] = useState(canvasList)

  return (
    <div className={styles.container}>
      <h1 >Business Canvas Criado</h1>
      {canvas.map((item, index) => (
        <BcListCard key={index} id={item.id} name={item.name} createdAt={item.createdAt}/>
      ))}
      <SendLink label='Criar Novo' url='/criar'/>
    </div>
  )
}

export default MyBusinessCanvas

const canvasList = [
  { id: '1', name: 'Empresa de Software', createdAt: '01/02/2023' },
  { id: '2', name: 'Empresa de Software', createdAt: '01/02/2023' },
  { id: '3', name: 'Empresa de Software', createdAt: '01/02/2023' }
]
