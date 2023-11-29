'use client'

import { type ReactNode } from 'react'
import { GlobalContextProvider } from '../global-context'
import { BusinessCanvasContextProvider } from '../business-canvas-context'

interface Props {
  children: ReactNode
}

export const Providers: React.FC<Props> = ({ children }: Props) => {
  return (
    <GlobalContextProvider>
      <BusinessCanvasContextProvider>{children}</BusinessCanvasContextProvider>
    </GlobalContextProvider>
  )
}
