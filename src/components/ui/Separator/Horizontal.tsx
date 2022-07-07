import React from 'react'

import Star from 'assets/images/star--current.svg?inline'

import styles from './Separator.module.scss'

const Horizontal: React.FC = () => {
  return (
    <div className={styles.horizontal}>
      <div className={styles.horizontalLine} />
      <Star />
      <div className={styles.horizontalLine} />
    </div>
  )
}

export default Horizontal
