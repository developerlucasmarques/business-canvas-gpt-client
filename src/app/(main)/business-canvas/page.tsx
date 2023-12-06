'use client'
import { BcListCard } from '@/app/(components)/business-canvas/bc-list-card'
import { NoBcFound } from '@/app/(components)/business-canvas/no-bc-found'
import { SendLink } from '@/app/(components)/buttons/send-link'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { getAllBusinessCanvasService } from '@/app/(services)/get-all-business-canvas/get-all-business-canvas-service'
import styles from '@/styles/all-business-canvas.module.css'
import { type BusinessCanvasSummary } from '@/types/api-responses/business-canvas-summary'
import { useEffect, useState } from 'react'

const BusinessCanvas: React.FC = () => {
  const [businessCanvasList, setBusinessCanvasList] = useState<BusinessCanvasSummary[]>([])
  const { accessToken } = useUserInfoCtx()

  const getData = async (): Promise<void> => {
    const res = await getAllBusinessCanvasService(accessToken)
    if (res.isLeft()) {
      return
    }
    setBusinessCanvasList(res.value)
  }

  useEffect(() => { getData().catch(() => {}) }, [])

  return (
    <div className={styles.container}>
      {
        !businessCanvasList.length
          ? <NoBcFound/>
          : <>
              <h1>Business Canvas Criados</h1>
              {businessCanvasList.map((item, index) => (
                <BcListCard key={index} id={item.id} name={item.name} createdAt={item.createdAt}/>
              ))}
            </>
      }
      <SendLink label='Criar Novo' url='/'/>
    </div>
  )
}

export default BusinessCanvas
