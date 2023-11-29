'use client'
import { BcListCard } from '@/app/(components)/business-canvas/bc-list-card'
import { SendLink } from '@/app/(components)/buttons/send-link'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { baseUrl } from '@/app/api/env'
import styles from '@/styles/all-business-canvas.module.css'
import { type BusinessCanvasSummary } from '@/types/api-responses/business-canvas-summary'
import { type ErrorReponse } from '@/types/api-responses/error-response'
import { useEffect, useState } from 'react'

const BusinessCanvas: React.FC = () => {
  const [businessCanvasList, setBusinessCanvasList] = useState<BusinessCanvasSummary[]>([])
  const { accessToken } = useUserInfoCtx()

  const getData = async (): Promise<void> => {
    const response = await fetch(`${baseUrl}/business-canvas`, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'x-access-token': accessToken
      }
    })
    const res: ErrorReponse | BusinessCanvasSummary[] = await response.json()
    if ('error' in res) {
      console.log('FAILS', res)
      return
    }
    setBusinessCanvasList(res)
  }

  useEffect(() => {
    getData().catch(console.error)
  }, [])

  return (
    <div className={styles.container}>
      <h1 >Business Canvas Criados</h1>
      {businessCanvasList.map((item, index) => (
        <BcListCard key={index} id={item.id} name={item.name} createdAt={item.createdAt}/>
      ))}
      <SendLink label='Criar Novo' url='/'/>
    </div>
  )
}

export default BusinessCanvas
