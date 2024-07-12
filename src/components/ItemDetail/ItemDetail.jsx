import React, { useContext } from "react"
import styles from "./Styles/ItemDetail.module.css"
import ItemCount from "../ItemCount/ItemCount"
import Context from "../../context/CartContext"

function ItemDetail({ id, name, description, image, price, stock }) {
    const { addItem } = useContext(Context)

    const onAdd = (quantity) => {
        const item = {
            id,
            name,
            price
        }
        addItem(item, quantity)
    }

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
                        <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
                    </div>
                </div>
            </div>

        </>
    )
}

export default ItemDetail