import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Logo.module.css'

export function Logo() {
  return (
    <Link href="/">
      <a>
        <h1 className={styles.logoHeading}>Personal website of Hans-Jakob Brandt</h1>
        <Image
          className={styles.logo}
          src="/Logo.png"
          alt="Hans-Jakob Brandt Logo"
        />
      </a>
    </Link>
  )
}
