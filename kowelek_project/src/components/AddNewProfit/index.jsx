import { useRef } from 'react';
import styles from './style.module.css';

export default function AddNewProfit({ profits, setProfits, balance, setBalance }) {
    const amountRef = useRef();
    const profitNameRef = useRef();

    const handleClick = () => {
        const newProfit = {
            name: profitNameRef.current.value,
            amount: parseInt(amountRef.current.value),
            date: new Date().toISOString().split('T')[0] 
        };
        setBalance(balance + newProfit.amount);
        setProfits([...profits, newProfit]);
        profitNameRef.current.value = '';
        amountRef.current.value = '';
        
    };

    return (
        <div className={styles.container}>
            <div>
                <input 
                    className={styles.inputField} 
                    type="text" 
                    placeholder='Название' 
                    ref={profitNameRef} 
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
            <div className={styles.divForAddNewProfitBtn}>
                <button 
                    onClick={handleClick} 
                    className={styles.addNewProfitBtn}
                >
                    Добавить прибыль
                </button>
            </div>
        </div>
    );
}
