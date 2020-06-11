import React from 'react'

import styles from './Header.module.css'

import { Logo } from '../../../atoms/logo/Logo'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Logo />
    </header>
  )
}
