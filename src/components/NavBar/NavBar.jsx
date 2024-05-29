import React from 'react'
import styles from './Styles/NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import MenuCategories from '../MenuCategories/MenuCategories'
import Logo from '../Logo/Logo'


const NavBar = () => {

  return (
    <>

      <div className={styles.navbar}>

        <MenuCategories />

        <Logo />

        <CartWidget />

      </div>

    </>
  )
}

export default NavBar

