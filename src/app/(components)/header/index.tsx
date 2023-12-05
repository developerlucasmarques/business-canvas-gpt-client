'use client'
import { useEffect, useState } from 'react'
import { Logo } from '@/app/(components)/logo'
import styles from './header.module.css'
import { NavBar } from '../nav-bar'
import { HeaderMenu } from './menu'

export const Header: React.FC = () => {
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

  return (
    <header className={styles.header}>
      <div className={`${styles.content} flex justify-between items-center`}>
        <Logo url='/'/>
        {isGreaterThan700 ? <NavBar/> : <HeaderMenu />}
      </div>
    </header>
  )
}
