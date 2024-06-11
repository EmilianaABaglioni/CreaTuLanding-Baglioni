import React from 'react'
import styles from './Styles/Item.module.css'
import { Link } from 'react-router-dom'

const Item = ({id, name, price, image}) => {
  return (
    <>
      
      <div>
        <div className={styles.boxImage}>
            <img src={image} alt={name} />
        </div>
        <div className={styles.boxInfoItem}>
            <h2>{name}</h2>
            <p>{price}</p>
        </div>
        <div className={styles.buttonDetail}>
            <Link to={`/products/${id}`}>Detalle</Link>
        </div>
      </div>

    </>
  )
}

export default Item
