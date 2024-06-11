import React from "react";
import loading from "../../assets/loading.gif";
import styles from "./Styles/Loading.module.css";

const Loading = () => {
  return (
    <>
      <div className={styles.boxLoading}>
        <img src={loading} alt="Loading" className={styles.loading} />
      </div>
    </>
  );
};

export default Loading;
