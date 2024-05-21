import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import styles from './Styles/NavBar.module.scss'

const NavBar = () => {
  return (
    <>

      <div className={styles.navbar}>

        <div className={styles.categories}>
          - PRODUCTOS
        </div>

        <div className={styles.logo}>
          LOGO
        </div>

        <div className={styles.cartwidget}>
          <CartWidget />
        </div>

      </div>

    </>
  )
}

export default NavBar

