import React from 'react'
import Link from 'next/link'

import styles from './Nav.module.css'
const { navMenu, navLink } = styles

export const Nav = () => {
  return (
    <nav className={navMenu} aria-label="Main Navigation">
      <Link className={navLink} href="/contact">
        Contact
      </Link>
      <Link className={navLink} href="/about">
        About
      </Link>
    </nav>
  )
}
