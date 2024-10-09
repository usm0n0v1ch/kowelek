import styles from './style.module.css';

export default function ProfitsArticles({ profits, onDeleteProfit }) {
    const totalProfitAmount = profits.reduce((total, profit) => total + profit.amount, 0);

    return (
        <div className={styles.container}>
            <div className={styles.title}>Profits Articles</div>
            <div className={styles.totalProfitAmount}>Total profit amount = {totalProfitAmount}$</div>
            <div className={styles.profitArticles}>
                {profits.map((profit, index) => (
                    <div key={index} className={styles.article}>
                        <div className={styles.articleTitleAndDate}>
                            <div className={styles.articleTitle}>{profit.name} = {profit.amount}$</div>
                            <div className={styles.articleDate}>{profit.date}</div>
                        </div>
                        <div className={styles.divForArticleDeleteBtn}>
                            <button 
                                className={styles.articleDeleteBtn} 
                                onClick={() => onDeleteProfit(index)} 
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
