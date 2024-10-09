import { useState } from 'react';
import MyBalance from './components/MyBalance';
import './App.css';
import MaxProfit from './components/MaxProfit';
import MaxExpense from './components/MaxExpense';
import MaxCategory from './components/MaxCategory';
import AddNewProfit from './components/AddNewProfit';
import AddNewExpense from './components/AddNewExpense';
import ProfitsArticles from './components/ProfitsArticles';
import ExpensesArticles from './components/ExpensesArticles';

function App() {
  const [profits, setProfits] = useState([]);
  const [expenses, setExpenses] = useState([]); 
  const [balance, setBalance] = useState(0);

  const handleDeleteProfit = (index) => {
    const updatedProfits = profits.filter((_, i) => i !== index);
    setProfits(updatedProfits);
    setBalance(balance - profits[index].amount);
  };

  const handleDeleteExpense = (index) => {
    const updatedExpenses = expenses.filter((_, i) => i !== index);
    setExpenses(updatedExpenses);
    setBalance(balance + expenses[index].amount); 
  };

  return (
    <div>
      <div className="container">
        <div className='first-block'>
          <div>
            <MyBalance balance={balance} />
          </div>
          <div className="statistics">
            <div className='max-statistics'>
              <div><MaxProfit profits={profits} /></div>
              <div><MaxExpense expenses={expenses} /></div>
              <div><MaxCategory expenses={expenses} /></div>
            </div>
          </div>
          <div>
            <AddNewProfit profits={profits} setProfits={setProfits} balance={balance} setBalance={setBalance} />
          </div>
          <div>
            <AddNewExpense expenses={expenses} setExpenses={setExpenses} balance={balance} setBalance={setBalance} />
          </div>
        </div>
        <div>
          <ProfitsArticles profits={profits} onDeleteProfit={handleDeleteProfit} />
        </div>
        <div>
          <ExpensesArticles expenses={expenses} onDeleteExpense={handleDeleteExpense} />
        </div>
      </div>
    </div>
  );
}

export default App;
