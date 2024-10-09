import styles from './style.module.css';

export default function ExpensesArticles({ expenses, onDeleteExpense }) {
    const totalExpenseAmount = expenses.reduce((total, expense) => total + expense.amount, 0);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Expenses Articles</div>
            <div className={styles.totalExpenseAmount}>Total expenses amount = {totalExpenseAmount}$</div>
            <div className={styles.expenseArticles}>
                {expenses.map((expense, index) => ( 
                    <div key={index} className={styles.article}>
                        <div className={styles.articleTitleAndDate}>
                            <div className={styles.articleTitle}>{expense.name} = {expense.amount}$</div>
                            <div className={styles.articleDate}>{expense.date}</div>
                        </div>
                        <div className={styles.divForArticleDeleteBtn}>
                            <button 
                                className={styles.articleDeleteBtn} 
                                onClick={() => onDeleteExpense(index)} 
                            >
                                Delete
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}
