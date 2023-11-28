'use client'
import { useUserInfoCtx } from '@/app/(context)/global-context'
import { NavsHeaders } from '@/utils/navs'
import { usePathname } from 'next/navigation'
import React, { type ReactNode } from 'react'
import { AccountButton } from '../buttons/account'

export const NavBar: React.FC = () => {
  const { userName } = useUserInfoCtx()
  const pathName = usePathname()

  const renderNavElements = (): ReactNode[] => {
    if (userName) {
      return [<AccountButton label={userName} url='/' />]
    }
    const currentNav = NavsHeaders.find(item => item.routeName === pathName)
    return (
      currentNav?.elements.map((element, index) => (
          <li key={index}>{element}</li>
      )) ?? []
    )
  }
  return <ul className='flex items-center gap-4'>{renderNavElements()}</ul>
}
