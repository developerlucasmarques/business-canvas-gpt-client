import React, { useEffect, useRef, useState } from 'react'
import styles from './header-menu.module.css'
import { NavBar } from '../../nav-bar'
import { usePathname } from 'next/navigation'

export const HeaderMenu: React.FC = () => {
  const exitContainerRef = useRef<HTMLDivElement>(null)
  const [isOpen, setIsOpen] = useState(false)
  const pathName = usePathname()

  const toggleDropdown = (): void => {
    setIsOpen(!isOpen)
  }

  const handleOutsideClick = (event: MouseEvent): void => {
    if (exitContainerRef.current && !exitContainerRef.current.contains(event.target as Node)) {
      setIsOpen(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleOutsideClick)
    return () => { document.removeEventListener('mousedown', handleOutsideClick) }
  }, [isOpen])

  useEffect(() => { setIsOpen(false) }, [pathName])

  return (
    <div className={styles.dropdownContainer}>
      <div onClick={toggleDropdown}>
        <svg height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M6 10.5C6 10.1022 6.15804 9.72064 6.43934 9.43934C6.72064 9.15804 7.10218 9 7.5 9H28.5C28.8978 9 29.2794 9.15804 29.5607 9.43934C29.842 9.72064 30 10.1022 30 10.5C30 10.8978 29.842 11.2794 29.5607 11.5607C29.2794 11.842 28.8978 12 28.5 12H7.5C7.10218 12 6.72064 11.842 6.43934 11.5607C6.15804 11.2794 6 10.8978 6 10.5ZM6 18C6 17.6022 6.15804 17.2206 6.43934 16.9393C6.72064 16.658 7.10218 16.5 7.5 16.5H28.5C28.8978 16.5 29.2794 16.658 29.5607 16.9393C29.842 17.2206 30 17.6022 30 18C30 18.3978 29.842 18.7794 29.5607 19.0607C29.2794 19.342 28.8978 19.5 28.5 19.5H7.5C7.10218 19.5 6.72064 19.342 6.43934 19.0607C6.15804 18.7794 6 18.3978 6 18ZM6 25.5C6 25.1022 6.15804 24.7206 6.43934 24.4393C6.72064 24.158 7.10218 24 7.5 24H28.5C28.8978 24 29.2794 24.158 29.5607 24.4393C29.842 24.7206 30 25.1022 30 25.5C30 25.8978 29.842 26.2794 29.5607 26.5607C29.2794 26.842 28.8978 27 28.5 27H7.5C7.10218 27 6.72064 26.842 6.43934 26.5607C6.15804 26.2794 6 25.8978 6 25.5Z" fill="#141774"/>
        </svg>
      </div>
      {isOpen && (
        <div className={styles.dropdownOverlay}>
          <div className={styles.dropdownContent} ref={exitContainerRef}>
            <NavBar/>
          </div>
        </div>
      )}
    </div>
  )
}
