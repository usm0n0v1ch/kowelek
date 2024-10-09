import styles from './style.module.css'

export default function MaxExpense({expenses}) {
  const maxExpense = expenses.length > 0 ? Math.max(...expenses.map(e => e.amount)) : 0;
  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Max Expense:</div>
      </div>
      <div className={styles.max}>
        <div>{maxExpense}$</div>
      </div>
    </div>
  )
}