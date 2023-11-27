import { type ReactNode, createContext, useState, useContext } from 'react'

export interface IUserInfo {
  userName: string
}

export interface IUserInfoContext extends IUserInfo {
  setUserInfo: (user: IUserInfo) => void
}

export const UserInfoContext = createContext<IUserInfoContext | null>(null)

interface Props {
  children: ReactNode
}

export const UserInfoProvider: React.FC<Props> = ({ children }: Props) => {
  const [userInfo, setUserInfo] = useState<IUserInfo>({ userName: '' })

  return (
    <UserInfoContext.Provider value={{ ...userInfo, setUserInfo }}>
      {children}
    </UserInfoContext.Provider>
  )
}

export const useUserInfoCtx = (): IUserInfoContext | null => useContext(UserInfoContext)
