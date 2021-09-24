import React from 'react'
import Link from 'next/link'

import styles from './Footer.module.css'
const { footer, container } = styles


export const Footer = () => {
  return (
    <footer className={footer}>
      <Link href="/">
        <a>
          <div className={container}>
            <span>Hans-Jakob</span>
            <span>Brandt</span>
          </div>
        </a>
      </Link>
    </footer>
  )
}
