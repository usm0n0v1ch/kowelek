import { useRef } from 'react';
import styles from './style.module.css';

export default function AddNewExpense({ expenses, setExpenses, balance, setBalance }) {
    const amountRef = useRef();
    const expenseNameRef = useRef();
    const categoryRef = useRef();

    const handleClick = () => {
        const newExpense = {
            name: expenseNameRef.current.value,
            amount: parseInt(amountRef.current.value),
            category: categoryRef.current.value,
            date: new Date().toLocaleDateString(), 
        };
        if (newExpense.amount <= 0) {
            alert('Сумма должна быть больше 0');
            return;
        }

        setBalance(balance - newExpense.amount);
        setExpenses([...expenses, newExpense]);

        expenseNameRef.current.value = '';
        amountRef.current.value = '';
        categoryRef.current.value = '';
    };

    return (
        <div className={styles.container}>
            <div>
                <input
                    className={styles.inputField}
                    type="text"
                    placeholder='Название'
                    ref={expenseNameRef}
                />
            </div>
            <div>
                <input
                    className={styles.inputField}
                    type="number"
                    placeholder='Сумма'
                    ref={amountRef}
                />
            </div>
            <select className={styles.inputFieldSelect} ref={categoryRef}>
                <option value="">Выберите категорию</option>
                {expenses.map((expense, index) => (
                    <option key={index} value={expense.name}>
                        {expense.name}
                    </option>
                ))}
            </select>
            <div className={styles.divForAddNewExpenseBtn}>
                <button
                    onClick={handleClick}
                    className={styles.addNewExpenseBtn}
                >
                    Добавить расход
                </button>
            </div>
        </div>
    );
}
