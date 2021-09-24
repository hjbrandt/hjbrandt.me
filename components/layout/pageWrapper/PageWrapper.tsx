import React from 'react'
import styles from './PageWrapper.module.css'
const { wrapper } = styles

interface Props {
  children: any
}



export const PageWrapper = ({ children }: Props) => {
  return <div className={wrapper}>{children}</div>
}
