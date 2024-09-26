import React from 'react'
import propic from '../../assets/propic1.jpg'
import Card from './Card';
import styles from './projectcard.module.css'
const Projectcard = () => {
  return (
    <>
      <div className={styles.projectcardcontainer}>
        <div className={styles.routs}>
        <div className={styles.route}>
          <ul className={styles.ul}>
            <li className={styles.li}><a className={styles.anchor} href="#">All</a></li>
            <li className={styles.li}><a  className={styles.anchor}href="#">Major</a></li>
            <li className={styles.li}><a  className={styles.anchor}href="#">Minor</a></li>
          </ul>
        </div>
        </div>
        <div className={styles.Cardcontainer}>
            <Card pic={propic} name="Hover To Play" Projectname="Food Delivery App" lang="React JS,HTML,CSS3, Node JS,Express,MongoDB,Redux JS etc"/>
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play" />
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play"/>
            <Card pic={propic} name="Hover To Play"/>

        </div>
      </div>
    </>
  )
}

export default Projectcard
