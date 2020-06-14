import React from 'react'
import styles from './style.scss'

const Container__Content = (props) => {

  return (
    <div className={styles.container__content}>
      {props.children}
    </div>
  )

}

export default Container__Content
