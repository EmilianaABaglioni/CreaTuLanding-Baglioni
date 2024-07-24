import React, { useContext } from "react";
import { IoCart } from "react-icons/io5";
import styles from "./Styles/CartWidget.module.css";
import { Link } from "react-router-dom";
import Context from "../../context/CartContext";

const CartWidget = () => {
  const { getQuantity } = useContext(Context)

  return (
    <>
      <div className={styles.boxCart}>
        <Link to='/cart'>
          <IoCart className={styles.iconcart} />
        </Link>
        <p className={styles.quantity}>{getQuantity() > 0 && getQuantity()}</p>
      </div>
    </>
  );
};

export default CartWidget;
