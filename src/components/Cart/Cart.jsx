import React, { useContext } from "react";
import styles from "./Styles/Cart.module.css";
import Context from "../../context/CartContext";
import { MdDelete } from "react-icons/md";

const Cart = () => {
  const { cart, removeItem, clearCart } = useContext(Context);

  return (
    <>
      <div className={styles.boxCart}>
        <div className={styles.boxColumnDescription}>
          <p>PRODUCTOS</p>
          <p>CANTIDAD</p>
          <p>PRECIO POR UNIDAD</p>
          <p>SUBTOTAL</p>
          <p>ELIMINAR</p>
        </div>
        <div className={styles.boxCartList}>
          {cart.map((product) => (
            <div className={styles.boxCartDetail}>
              <p>{product.name}</p>
              <p>{product.quantity}</p>
              <p>${product.price}</p>
              <p>${product.price * product.quantity}</p>
              <div className={styles.boxRemoveItem}>
                <button onClick={() => removeItem(product.id)}>
                  <MdDelete />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.boxTotal}>
          <p>TOTAL ${}</p>
        </div>
      </div>
    </>
  );
};

export default Cart;
