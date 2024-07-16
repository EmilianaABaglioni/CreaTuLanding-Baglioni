import React, { useState } from "react";
import styles from "./Styles/ItemCount.module.css";

const ItemCount = ({ stock, initialValue, onAdd }) => {
  const [count, setCount] = useState(initialValue);
  const increase = () => {
    count < stock && setCount(count + 1);
  };
  const decree = () => {
    count > initialValue && setCount(count - 1);
  };

  return (
    <div className={styles.boxCount}>
      <div className={styles.boxID}>
        <button onClick={decree} className={styles.button}>
          -
        </button>
          <p>{count}</p>
        <button onClick={increase} className={styles.button}>
          +
        </button>
      </div>
      <button className={styles.add} onClick={()=> onAdd(count)}>Agregar al carrito</button>
    </div>
  );
};

export default ItemCount;
