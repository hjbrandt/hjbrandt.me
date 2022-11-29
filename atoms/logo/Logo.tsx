import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

import styles from './Logo.module.css'

export function Logo() {
  return (
    <Link href="/">
      <>
        <h1 className={styles.logoHeading}>
          Personal website of Hans-Jakob Brandt
        </h1>
        <Image
          className={styles.logo}
          width={500}
          height={500}
          src="/Logo.png"
          alt="Hans-Jakob Brandt Logo"
        />
      </>
    </Link>
  )
}
