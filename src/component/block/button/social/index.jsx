import React from 'react'
import styles from './style.scss'

const Button__Social = ({data}) => (

  data.map((item) =>
    <a
      className={styles.social__icon}
      href={item.href}
      key={item.text}
    >
      {item.text}
    </a>
  )

)

export default Button__Social
