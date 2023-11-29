'use client'
import { BcContainer } from '@/app/(components)/business-canvas/bc-container'
import { NotFound } from '@/app/(components)/errors/not-found'
import { useBusinessCanvasCtx } from '@/app/(contexts)/business-canvas-context'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { type ErrorReponse } from '@/types/api-responses/error-response'
import { type IBusinessCanvas } from '@/types/business-canvas'
import { apiBaseUrl } from '@/utils/env'
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
    if (businessCanvasCtx?.businessCanvas) {
      setBusinessCanvas(businessCanvasCtx.businessCanvas)
      return
    }
    const response = await fetch(`${apiBaseUrl}/business-canvas/${params.id}`, {
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
