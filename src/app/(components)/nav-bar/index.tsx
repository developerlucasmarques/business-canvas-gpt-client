'use client'
import { useUserInfoCtx } from '@/app/(context)/global-context'
import { NavsHeaders } from '@/utils/navs'
import React from 'react'
import { AccountButton } from '../buttons/account'

export const NavBar: React.FC = () => {
  const { userName } = useUserInfoCtx()

  return (
    <ul className='flex items-center gap-4'>
      {userName
        ? (
        <li><AccountButton label={userName} url='/user'/></li>
          )
        : (
            NavsHeaders.map((item) => (
            <li key={item.id}>{item.element}</li>
            ))
          )
    }
    </ul>
  )
}
