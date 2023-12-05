'use client'
import { useEffect, useRef, useState } from 'react'
import styles from './account-button.module.css'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { useRouter } from 'next/navigation'

interface Props {
  userName: string
}

export const AccountButton: React.FC<Props> = ({ userName }: Props) => {
  const { unsetAccessToken, unsetUserName } = useUserInfoCtx()
  const [buttonDisplay, setButtonDisplay] = useState(false)
  const exitContainerRef = useRef<HTMLDivElement>(null)
  const router = useRouter()
  const [windowWidth, setWindowWidth] = useState(window.innerWidth)
  const isGreaterThan700 = windowWidth > 700

  useEffect(() => {
    const handleResize = (): void => {
      setWindowWidth(window.innerWidth)
    }
    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [isGreaterThan700])

  const handleClick = (): void => {
    setButtonDisplay(!buttonDisplay)
  }

  const exitHandleClick = (): void => {
    unsetAccessToken(); unsetUserName()
    router.replace('/')
  }

  const handleOutsideClick = (event: MouseEvent): void => {
    if (exitContainerRef.current && !exitContainerRef.current.contains(event.target as Node)) {
      setButtonDisplay(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => { document.removeEventListener('mousedown', handleOutsideClick) }
  }, [buttonDisplay])

  return (
  <li className={'flex justify-center items-end flex-col'}>
    <div
      className={`${styles.accountButton} flex justify-center items-center`}
      onClick={isGreaterThan700 ? handleClick : undefined}
    >
      <p className={styles.truncate}>{userName}</p>
      {isGreaterThan700 &&
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.75 10.5L9 6.75L5.25 10.5" stroke="#141774" strokeWidth="1.125" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      }
    </div>
    <div ref={exitContainerRef} className={`${styles.exitContainer} ${buttonDisplay ? 'flex' : 'hidden'}`}>
      <button className={styles.exitButtom} onClick={exitHandleClick}>Sair</button>
    </div>
  </li>
  )
}
