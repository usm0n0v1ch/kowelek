import styles from './style.module.css';

export default function MaxProfit({ profits }) {

  const maxProfit = profits.length > 0 ? Math.max(...profits.map(p => p.amount)) : 0;

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Max Profit:</div>
      </div>
      <div className={styles.max}>
        <div>{maxProfit}$</div>
      </div>
    </div>
  );
}
