import styles from './style.module.css';

export default function MaxCategory({ expenses }) {
  const categorySums = expenses.reduce((acc, expense) => {
    acc[expense.category] = (acc[expense.category] || 0) + expense.amount;
    return acc;
  }, {});

  const maxCategory = Object.entries(categorySums).reduce(
    (max, [category, amount]) => (amount > max.amount ? { category, amount } : max),
    { category: '', amount: 0 }
  );

  return (
    <div className={styles.container}>
      <div className={styles.title}>
        <div>Max Category:</div>
      </div>
      <div className={styles.max}>
        <div>{maxCategory.category ? `${maxCategory.category}: ${maxCategory.amount}$` : 'N/A'}</div>
      </div>
    </div>
  );
}
