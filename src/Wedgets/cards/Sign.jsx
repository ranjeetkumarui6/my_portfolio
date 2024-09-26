import React from 'react'
import styles from './sign.module.css'
import { FaRoad } from 'react-icons/fa'
const Sign = (props) => {
  return (
    <>
      <div className={styles.squre}>
                <div className={styles.squrecard}>
                    <img src={props.sign} alt="imgsign" style={{width:props.width ,marginLeft:props.m}} className={styles.sign}/>
                    <div className={styles.spcontainer}>
                         <span className={styles.font1}>{props.more} 
                         </span>
                    <span className={styles.credential} style={{color:props.color,textDecoration:props.td,}}>
                    {props.Credentials}
                         </span> 
                        
                    </div>
                </div>
               </div>
    </>
  )
}

export default Sign
