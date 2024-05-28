import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import MenuCategories from '../MenuCategories/MenuCategories'
import styles from './Styles/NavBar.module.css'


const NavBar = () => {

  return (
    <>

      <div className={styles.navbar}>

        <MenuCategories />

        <div className={styles.logo}>
          LOGO
        </div>

        <CartWidget />

      </div>

    </>
  )
}

export default NavBar

