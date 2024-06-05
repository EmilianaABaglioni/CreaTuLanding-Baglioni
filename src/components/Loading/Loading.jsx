import React from 'react'
import loading from '../../assets/loading.gif'
import styles from './Styles/Loading.module.css'

const Loading = () => {
  return (
    <>
      <img src={loading} alt="Loading" className={styles.loading} />
    </>
  )
}

export default Loading
