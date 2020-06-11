import React from 'react'

import styles from './PageWrapper.module.css'
const { wrapper } = styles

export const PageWrapper = ({ children }) => {
  return <div className={wrapper}>{children}</div>
}
