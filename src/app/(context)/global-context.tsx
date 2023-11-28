'use client'
import { type ReactNode, createContext, useState, useContext, useEffect } from 'react'

const STORAGE_KEY = 'userNameContext'

interface ContextProps {
  userName: string
  setUserName: (name: string) => void
}

export const GlobalContext = createContext<ContextProps>({
  userName: '',
  setUserName: (name: string) => name
})

interface Props {
  children: ReactNode
}

export const GlobalContextProvider: React.FC<Props> = ({ children }: Props) => {
  let storageData: string | null = null
  if (typeof window !== 'undefined') {
    storageData = localStorage.getItem(STORAGE_KEY)
  }
  const [isMounted, setIsMounted] = useState(false)
  const [userName, setUserName] = useState(storageData ? JSON.parse(storageData) : '')

  useEffect(() => {
    setIsMounted(true)
    localStorage.setItem(STORAGE_KEY, JSON.stringify(userName))
  }, [userName])

  if (!isMounted) return null

  return (
    <GlobalContext.Provider value={{ userName, setUserName }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useUserInfoCtx = (): ContextProps => useContext(GlobalContext)
