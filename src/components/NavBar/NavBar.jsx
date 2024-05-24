import React, { useState, useRef } from 'react'
import CartWidget from '../CartWidget/CartWidget'
import styles from './Styles/NavBar.module.scss'
import { listCategory } from '../../utils/data'


const NavBar = () => {

  const [open, setOpen] = useState(false)

  const categoriesRef = useRef()
  const listCategoriesRef = useRef()

  window.addEventListener('click', (e) => {
    if (e.target !== listCategoriesRef.current && e.target !== categoriesRef.current) {
      setOpen(false);
    }
  })

  return (
    <>
    
      <div className={styles.navbar}>

        <div className={styles.categories}>

          <div className={styles.menuCategories}>
            <p onClick={() => setOpen(!open)} ref={categoriesRef}>PRODUCTOS</p>
          </div>

          {
            open && (
              <ul className={styles.listCategories}>
                {listCategory.map((category, index) => (
                  <li className={styles.liListCategories} key={index} onClick={() => setOpen(false)} ref={listCategoriesRef}>
                    {category}
                  </li>
                ))}
              </ul>
            )
          }

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

