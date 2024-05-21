import React from 'react'
import { CiShoppingCart } from 'react-icons/ci'
import styles from './Styles/CartWidget.module.scss'

const CartWidget = () => {
  return (
    <>
      <div>
        <CiShoppingCart className={styles.iconcart}/>
      </div>
    </>

  )
}

export default CartWidget
