import React from 'react'

import styles from './Header.module.css'

import { Logo } from '../../../atoms/logo/Logo'
import { Announcement } from '../../../atoms/announcement/Announcement.tsx'
export const Header = () => {
  return (
    <header className={styles.header}>
      <Announcement />
      <Logo />
    </header>
  )
}
