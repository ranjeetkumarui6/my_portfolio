import React from 'react'
import styles from './social.module.css'
const Socialifo = (props) => {
  return (
    <>
      <div className={styles.contacticoncontainer}>
        <div className={styles.icons}>
            <i className={styles.icon}>{props.icon}</i>
        </div>
      </div>
    </>
  )
}

export default Socialifo
