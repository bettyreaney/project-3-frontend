import './App.css';
import { useState, useEffect } from 'react';
import CreateMoney from './components/CreateMoney/CreateMoney';
import AllIncome from './components/AllIncome/AllIncome';

function App() {

  const [createNew, setCreateNew] = useState(false)
  
  const [allIncome, setAllIncome] = useState(false)

  const [allExpenses, setAllExpenses] = useState(false)

  const [allTransactions, setAllTransactions] = useState(false)

  const handleRender = evt => {
    if(evt.target.id === 'new') {
      setCreateNew(true)
      setAllIncome(false)
      setAllExpenses(false)
      setAllTransactions(false)
    } else if(evt.target.id === 'income') {
      setCreateNew(false)
      setAllIncome(true)
      setAllExpenses(false)
      setAllTransactions(false)
    } else if(evt.target.id === 'expense') {
      setCreateNew(false)
      setAllIncome(false)
      setAllExpenses(true)
      setAllTransactions(false)
    } else if(evt.target.id === 'all') {
      setCreateNew(false)
      setAllIncome(false)
      setAllExpenses(false)
      setAllTransactions(true)
    }
  }

  return (
    <div className="App">
      <header className="App-header">

      <button id="new" onClick={evt => handleRender(evt)}>Add a New Transaction</button>
      <button id="income" onClick={evt => handleRender(evt)}>View All Income</button>
      <button id="expense" onClick={evt => handleRender(evt)}>View All Expenses</button>
      <button id="all" onClick={evt => handleRender(evt)}>View All Transactions</button>
        
      </header>
      {createNew === true ? 
      <CreateMoney />
    : null}

    {allIncome === true ? 
      <AllIncome />
    : null} 

    {allExpenses === true ? 
    <p>Expenses</p>
    : null}

    {allTransactions === true ? 
    <p>All Transactions</p>
    : null}

      
    </div>
  );
}

export default App;
