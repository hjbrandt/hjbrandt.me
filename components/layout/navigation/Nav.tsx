import React from 'react'
import Link from 'next/link'

import styles from './Nav.module.css'

export const Nav = () => {
  const { navMenu, navLink } = styles
  return (
    <nav className={navMenu} aria-label="Main Navigation">
      <Link href="/contact">
        <a className={navLink}>Contact</a>
      </Link>
      <Link href="/about">
        <a className={navLink}>About</a>
      </Link>
    </nav>
  )
}
