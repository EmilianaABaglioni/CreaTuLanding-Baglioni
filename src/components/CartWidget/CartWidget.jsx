import React from 'react'
import { IoCart } from "react-icons/io5";
import styles from './Styles/CartWidget.module.css'

const CartWidget = () => {
  return (
    <>
      <div>
        <IoCart className={styles.iconcart} />
      </div>
    </>

  )
}

export default CartWidget
