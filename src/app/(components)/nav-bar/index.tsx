'use client'
import { useUserInfoCtx } from '@/app/(contexts)/global-context'
import { NavsHeaders } from '@/utils/navs'
import { usePathname } from 'next/navigation'
import React, { type ReactNode } from 'react'
import { AccountButton } from '../buttons/account'
import { MyBusinessCanvasButton } from '../buttons/my-business-canvas'
import styles from './nav-bar.module.css'

export const NavBar: React.FC = () => {
  const { userName } = useUserInfoCtx()
  const pathName = usePathname()

  const renderNavElements = (): ReactNode[] => {
    if ((userName && pathName === '/') || (userName && /^\/business-canvas\/.*$/.test(pathName))) {
      return [
        <MyBusinessCanvasButton key={1} url='/business-canvas' />,
        <AccountButton key={2} userName={userName} />
      ]
    }
    if (userName) {
      return [<AccountButton userName={userName}/>]
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
