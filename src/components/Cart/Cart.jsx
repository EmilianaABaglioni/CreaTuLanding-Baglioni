import React, { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "./Styles/Cart.module.css";
import Context from "../../context/CartContext";
import { RiDeleteBin5Line } from "react-icons/ri";

const Cart = () => {
  const { cart, removeItem, clearCart, total } = useContext(Context);

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
          {cart.map((product, id) => (
            <div className={styles.boxCartDetail} key={id}>
              <p>{product.name}</p>
              <p>{product.quantity}</p>
              <p>${product.price}</p>
              <p>${product.price * product.quantity}</p>
              <div className={styles.boxRemoveItem}>
                <button onClick={() => removeItem(product.id)}>
                  <RiDeleteBin5Line />
                </button>
              </div>
            </div>
          ))}
        </div>
        <div className={styles.boxTotal}>
          <p>TOTAL ${total()}</p>
        </div>
        <div className={styles.boxEndButtons}>
          <button><Link to='/checkout'>Finalizar compra</Link></button>
          <button  onClick={() => clearCart()}>Vaciar carrito</button>
          <button><Link to='/'>Seguir comprando</Link></button>
        </div>
      </div>
    </>
  );
};

export default Cart;
