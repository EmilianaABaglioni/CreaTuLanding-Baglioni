import React, { useContext, useState } from "react";
import styles from "./Styles/ItemDetail.module.css";
import ItemCount from "../ItemCount/ItemCount";
import Context from "../../context/CartContext";
import { Link } from "react-router-dom";

function ItemDetail({ id, name, description, image, price, stock }) {
  const [amount, setAmount] = useState(0);
  const { addItem } = useContext(Context);

  const onAdd = (quantity) => {
    const item = {
      id,
      name,
      price,
    };
    addItem(item, quantity);
    setAmount(quantity);
  };

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
            {amount > 0 ? (
              <div className={styles.boxCartContinue}>
                <button className={styles.cart}>
                  <Link to="/cart">Ir al carrito</Link>
                </button>
                <button className={styles.continue}>
                  <Link to="/">Seguir comprando</Link>
                </button>
              </div>
            ) : (
              <ItemCount stock={stock} initialValue={1} onAdd={onAdd} />
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default ItemDetail;
