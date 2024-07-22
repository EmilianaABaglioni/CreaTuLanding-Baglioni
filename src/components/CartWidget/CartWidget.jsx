import React from "react";
import { IoCart } from "react-icons/io5";
import styles from "./Styles/CartWidget.module.css";
import { Link } from "react-router-dom";

const CartWidget = () => {
  return (
    <>
      <div>
        <Link to='/cart'>
          <IoCart className={styles.iconcart} />
        </Link>
      </div>
    </>
  );
};

export default CartWidget;
