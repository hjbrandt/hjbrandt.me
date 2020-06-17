import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const LogoH1 = styled.h1`
  width: 1px !important;
  height: 1px !important;
  padding: 0px !important;
  margin: -1px !important;
  white-space: nowrap !important;
  position: absolute !important;
  overflow: hidden !important;
  border: 0px none !important;
  clip: rect(1px, 1px, 1px, 1px) !important;
  clip-path: inset(50%) !important;
`

import styles from './Logo.module.css'

export function Logo() {
  return (
    <Link href="/">
      <a>
        <LogoH1>Personal website of Hans-Jakob Brandt</LogoH1>
        <img
          className={styles.logo}
          src="/Logo.png"
          alt="Hans-Jakob Brandt Logo"
        />
      </a>
    </Link>
  )
}
