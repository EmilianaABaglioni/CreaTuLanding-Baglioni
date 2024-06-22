import React from "react"
import styles from "./Styles/ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"

const ItemDetail = ({ name, description, image, price, stock }) => {
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
                        <ItemCount stock={stock} initialValue={1}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail