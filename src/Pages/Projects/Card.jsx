import React from 'react'
import styles from './card.module.css'
import { FaChrome } from 'react-icons/fa6'
function Card(props) {
  return (
    <>
      <div className={styles.card}>
        <div className={styles.bgcolorpic}>
            <div className={styles.toggle}>
                <div className={styles.cardtoggle}>
                  <i><FaChrome size={30}/></i>
                <h2 className={styles.appname}>{props.Projectname}</h2>
                <p className={styles.lang}>{props.lang}</p>
                </div>
            </div>
        <img src={props.pic} alt="projectpic" className={styles.propic} />
        </div>
        <h4 className={styles.name}>{props.name}</h4>

      </div>
    </>
  )
}

export default Card
