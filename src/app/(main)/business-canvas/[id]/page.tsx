'use client'
import { BcContainer } from '@/app/(components)/business-canvas/bc-container'
import { NotFound } from '@/app/(components)/errors/not-found'
import { useBusinessCanvasCtx } from '@/app/(contexts)/business-canvas-context'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { getOneBusinessCanvasService } from '@/app/(services)/get-one-business-canvas/get-one-business-canvas-service'
import { type IBusinessCanvas } from '@/types/business-canvas'
import { useEffect, useState } from 'react'

interface Props {
  params: {
    id: string
  }
}

const BusinessCanvasById: React.FC<Props> = ({ params }: Props) => {
  const [businessCanvas, setBusinessCanvas] = useState<IBusinessCanvas | null>(null)
  const { accessToken } = useUserInfoCtx()
  const businessCanvasCtx = useBusinessCanvasCtx()

  const getData = async (): Promise<void> => {
    if (businessCanvasCtx?.businessCanvas?.id === params.id) {
      setBusinessCanvas(businessCanvasCtx.businessCanvas)
      return
    }
    const res = await getOneBusinessCanvasService(accessToken, params.id)
    if (res.isLeft()) {
      return
    }
    setBusinessCanvas(res.value)
  }

  useEffect(() => { getData().catch(() => {}) }, [])

  return (
    <>
      {businessCanvas
        ? <BcContainer businessCanvas={businessCanvas}/>
        : <NotFound value='Business Canvas'/>
      }
    </>
  )
}

export default BusinessCanvasById
