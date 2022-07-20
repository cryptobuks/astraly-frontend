import React, { useCallback } from 'react'
import classnames from 'classnames'

import BaseButton from 'components/ui/buttons/BaseButton'

import IconReply from 'assets/icons/outline/Reply.svg?inline'
import Planets from 'assets/animations/planet.svg?inline'

import styles from './404.module.scss'

export default function Custom404() {
  const handleBack = useCallback(() => {
    window?.history.back()
  }, [])

  return (
    <div className={styles.notFound}>
      <h1 className="font-heading text-40 t-primary text-center mb-4 uppercase">
        Lost in space? 👽
      </h1>
      <div className="t-primaryClear flex flex-col md:flex-row items-center gap-10 justify-center mb-4">
        This local is not available.
        <BaseButton
          className={classnames(styles.notFound__return, 'px-5')}
          inline
          onClick={handleBack}>
          <IconReply /> Return where I was
        </BaseButton>
      </div>
      <div
        className={classnames(
          styles.notFound__404,
          '-z-10 text-[100px] sm:text-[140px] md:text-[180px] lg:text-[260px] xl:text-[300px] 2xl:text-[350px] font-heading text-white dark:text-primaryClearBgDark dark:text-shadow-white'
        )}>
        404
      </div>
      <div
        className={classnames(
          styles.notFound__planets,
          'absolute',
          'inset-x-1/2',
          'bottom-0',
          '-z-10',
          '-translate-x-1/2',
          'translate-y-1/2 md:translate-y-1/4 lg:translate-y-0'
        )}>
        <Planets className="lightning_svg" />
      </div>
    </div>
  )
}
