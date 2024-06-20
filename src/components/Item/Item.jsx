import React from 'react'
import styles from './Styles/Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, image}) => {
  return (
    <>
      
      <div className={styles.boxItem}>
        <div className={styles.boxImage}>
            <img src={image} alt={name} className={styles.image} />
        </div>
        <div className={styles.boxInfoItem}>
            <h2 className={styles.nameProduct}>{name}</h2>
            <p className={styles.priceProduct}>$ {price}</p>
        </div>
        <div className={styles.boxButton}>
            <Link to={`/products/detail/${id}`} className={styles.buttonDetail}>+ Ver más</Link>
        </div>
      </div>

    </>
  )
}

export default Item
