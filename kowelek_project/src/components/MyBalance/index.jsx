import { useState } from 'react'
import styles from './style.module.css'  

export default function MyBalance(props) {
  
  return (
    <div className={styles.container}>
        <div className={styles.title}>
          <div>My Balance</div>
          <i className="fas fa-wallet"></i>
        </div>
        <div className={styles.balance}>
          <div>{props.balance}$</div>
        </div>
    </div>
  )
}
