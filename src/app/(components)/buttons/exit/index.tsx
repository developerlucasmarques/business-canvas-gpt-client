'use client'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import styles from './exit.module.css'
import { useRouter } from 'next/navigation'

export const Exit: React.FC = () => {
  const { unsetAccessToken, unsetUserName } = useUserInfoCtx()
  const router = useRouter()

  const exitHandleClick = (): void => {
    unsetAccessToken(); unsetUserName()
    router.replace('/')
  }

  return (
  <div onClick={exitHandleClick} className={styles.exit}>Sair</div>
  )
}
