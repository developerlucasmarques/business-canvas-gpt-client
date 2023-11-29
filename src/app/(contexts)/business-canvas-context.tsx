'use client'

import { type IBusinessCanvas } from '@/types/business-canvas'
import { type ReactNode, createContext, useState, useContext } from 'react'

interface ContextProps {
  businessCanvas: IBusinessCanvas | null
  setBusinessCanvas: (data: IBusinessCanvas) => void
}

const BusinessCanvasContext = createContext<ContextProps | null>(null)

interface Props {
  children: ReactNode
}

export const BusinessCanvasContextProvider: React.FC<Props> = ({ children }: Props) => {
  const [businessCanvas, setBusinessCanvas] = useState<IBusinessCanvas | null>(null)

  return (
    <BusinessCanvasContext.Provider value={{ businessCanvas, setBusinessCanvas }}>
      {children}
    </BusinessCanvasContext.Provider>
  )
}

export const useBusinessCanvasCtx = (): ContextProps | null => useContext(BusinessCanvasContext)
