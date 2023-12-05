'use client'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { NavsHeaders } from '@/utils/navs'
import { usePathname } from 'next/navigation'
import React, { useState, type ReactNode, useEffect } from 'react'
import { AccountButton } from '../buttons/account'
import { MyBusinessCanvasButton } from '../buttons/my-business-canvas'
import styles from './nav-bar.module.css'
import { Exit } from '../buttons/exit'

export const NavBar: React.FC = () => {
  const { userName } = useUserInfoCtx()
  const pathName = usePathname()
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

  const renderNavElements = (): ReactNode[] => {
    if (((userName && pathName === '/') || (userName && /^\/business-canvas\/.*$/.test(pathName))) && isGreaterThan700) {
      return [
        <li><MyBusinessCanvasButton key={1} url='/business-canvas' /></li>,
        <li><AccountButton key={2} userName={userName} /></li>
      ]
    }
    if (((userName && pathName === '/') || (userName && /^\/business-canvas\/.*$/.test(pathName))) && !isGreaterThan700) {
      return [
        <li><MyBusinessCanvasButton key={1} url='/business-canvas' /></li>,
        <li><Exit key={2}/></li>
      ]
    }
    if (userName && isGreaterThan700) {
      return [<li><AccountButton key={1} userName={userName} /></li>]
    }
    if (userName && !isGreaterThan700) {
      return [<Exit key={1} />]
    }
    const currentNav = NavsHeaders.find(item => item.routeName === pathName)
    return (
      currentNav?.elements.map((element, index) => (
          <li key={index}>{element}</li>
      )) ?? []
    )
  }
  return <ul className={styles.navBar}>{renderNavElements()}</ul>
}
