import React from 'react'
import styles from './Styles/ItemList.module.css'

const ItemList = ({ itemList }) => {
    return (
        <>

            <div className={styles.boxItemList}>
                {itemList.map(({ id, name, price, image }) => {
                    return (
                        <Item
                            key={id}
                            id={id}
                            name={name}
                            price={price}
                            image={image}
                        />
                    );
                })}
            </div>

        </>
    )
}

export default ItemList
