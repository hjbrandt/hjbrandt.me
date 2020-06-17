import React from 'react'

import styles from './Hero.module.css'
const { hero, right, left } = styles

export const Hero = () => {
  return (
    <div className={hero}>
      <h3>
        <span className={right}>I&apos;m an</span>
        <span className={left}>interactive</span>
        <span className={right}>developer</span>
        <span className={left}>based</span>
        <span className={right}>in Oslo.</span>
      </h3>
    </div>
  )
}
