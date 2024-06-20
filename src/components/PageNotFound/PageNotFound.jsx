import React from 'react'
import styles from "./Styles/PageNotFound.module.css";
import { PiSmileySadThin } from "react-icons/pi";
import { Link } from 'react-router-dom';

const PageNotFound = () => {
  return (
    <>
        <div className={styles.box404}>
            <PiSmileySadThin className={styles.icon} /> 
            <p className={styles.p404}>404</p>
            <p className={styles.pnf}>Page not found</p>
        </div>
    </>
  )
}

export default PageNotFound
