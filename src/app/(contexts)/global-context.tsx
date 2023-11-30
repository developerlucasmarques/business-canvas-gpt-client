'use client'
import { type ReactNode, createContext, useState, useContext, useEffect } from 'react'

const STORAGE_USER_NAME_KEY = 'userName'
const STORAGE_ACCESS_TOKEN_KEY = 'accessToken'

interface ContextProps {
  userName: string
  setUserName: (name: string) => void
  unsetUserName: () => void
  accessToken: string
  setAccessToken: (token: string) => void
  unsetAccessToken: () => void
}

const GlobalContext = createContext<ContextProps>({
  userName: '',
  setUserName: (name: string) => name,
  unsetUserName: () => {},
  accessToken: '',
  setAccessToken: (token: string) => token,
  unsetAccessToken: () => {}
})

interface Props {
  children: ReactNode
}

export const GlobalContextProvider: React.FC<Props> = ({ children }: Props) => {
  let storageUserNameData: string | null = null
  let storageAccessTokenData: string | null = null
  if (typeof window !== 'undefined') {
    storageUserNameData = localStorage.getItem(STORAGE_USER_NAME_KEY)
    storageAccessTokenData = localStorage.getItem(STORAGE_ACCESS_TOKEN_KEY)
  }
  const [isMounted, setIsMounted] = useState(false)
  const [userName, setUserName] = useState(storageUserNameData ? JSON.parse(storageUserNameData) : '')
  const [accessToken, setAccessToken] = useState(storageAccessTokenData ? JSON.parse(storageAccessTokenData) : '')

  const unsetUserName = (): void => {
    setUserName('')
    localStorage.removeItem(STORAGE_USER_NAME_KEY)
  }
  const unsetAccessToken = (): void => {
    setAccessToken('')
    localStorage.removeItem(STORAGE_ACCESS_TOKEN_KEY)
  }

  useEffect(() => {
    setIsMounted(true)
    localStorage.setItem(STORAGE_USER_NAME_KEY, JSON.stringify(userName))
    localStorage.setItem(STORAGE_ACCESS_TOKEN_KEY, JSON.stringify(accessToken))
  }, [userName])

  if (!isMounted) return null

  return (
    <GlobalContext.Provider value={{
      userName, setUserName, accessToken, setAccessToken, unsetUserName, unsetAccessToken
    }}>
      {children}
    </GlobalContext.Provider>
  )
}

export const useUserInfoCtx = (): ContextProps => useContext(GlobalContext)
