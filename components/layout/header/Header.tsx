import React from 'react'

import styles from './Header.module.css'
const { header } = styles


import { Logo } from '../../../atoms/logo/Logo'
import { Announcement } from '../../../atoms/announcement/Announcement'
export const Header = () => {
  return (
    <header className={header}>
      <Announcement />
      <Logo />
    </header>
  )
}
