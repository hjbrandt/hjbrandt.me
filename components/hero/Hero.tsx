import React from 'react'

import styles from './Hero.module.css'
const { right, left } = styles

export const Hero = () => {
  return (
    <h3>
      <span className={right}>I&apos;m an</span>
      <span className={left}>interactive</span>
      <span className={right}>developer</span>
      <span className={left}>based</span>
      <span className={right}>in Oslo.</span>
    </h3>
  )
}
