import React from 'react'
import Link from 'next/link'

export const Nav = () => {
  return (
    <nav aria-label="Main Navigation">
      <Link href="/contact">
        <a>Contact</a>
      </Link>
      <Link href="/about">
        <a>About</a>
      </Link>
    </nav>
  )
}
