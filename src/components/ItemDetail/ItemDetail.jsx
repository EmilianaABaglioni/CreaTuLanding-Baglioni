import React from "react"
import styles from "./Styles/ItemDetail.module.css"

const ItemDetail = ({ name, description, image, price }) => {
    return (
        <>
            <div className={styles.detailBox}>
                <div className={styles.imageBox}>
                    <img src={image} alt={name} />
                </div>
                <div className={styles.infoBox}>
                    <h2 className={styles.name}>{name}</h2>
                    <p className={styles.description}>{description}</p>
                    <p className={styles.price}>${price}</p>
                    <div className={styles.buttonBox}>
                        AGREGAR AL CARRITO
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail