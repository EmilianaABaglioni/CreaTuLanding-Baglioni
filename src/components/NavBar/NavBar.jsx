import React from 'react'
import styles from './Styles/NavBar.module.css'
import CartWidget from '../CartWidget/CartWidget'
import MenuCategories from '../MenuCategories/MenuCategories'
import Logo from '../Logo/Logo'


const NavBar = () => {

  return (
    <>

      <div className={styles.navbar}>

        <div className={styles.boxLogo}>
          <Logo />
        </div>

        <div className={styles.boxLinks}>

          <div className={styles.boxMenuCategories}>
            <MenuCategories />
          </div>

          <div className={styles.boxSing}>
            <p className={styles.sing}>Sing in</p>
            <p className={styles.sing}>Sing up</p>
          </div>

          <div className={styles.boxCartWidget}>
            <CartWidget />
          </div>

        </div>

      </div>

    </>
  )
}

export default NavBar

