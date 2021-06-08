import './App.css';
import { useState, useEffect } from 'react';
import CreateMoney from './components/CreateMoney/CreateMoney';
import AllIncome from './components/AllIncome/AllIncome'
import AllExpenses from './components/AllExpenses/AllExpenses';
import AllTransactions from './components/AllTransactions/AllTransactions';

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

  function handleEdit(id) {
    console.log(id);
  }

  return (
    <div className="App">
      <header className="App-header">
        <h1>$ Money Tracker $</h1>
      </header>

      <div>
      <strong id="balance">Balance</strong>
      </div>
      

      <button id="new" onClick={evt => handleRender(evt)}>Add a New Transaction</button>
      <button id="income" onClick={evt => handleRender(evt)}>View All Income</button>
      <button id="expense" onClick={evt => handleRender(evt)}>View All Expenses</button>
      <button id="all" onClick={evt => handleRender(evt)}>View All Transactions</button>

    {createNew === true ? 
      <CreateMoney />
    : null}

    {allIncome === true ? 
      <AllIncome />
    : null} 

    {allExpenses === true ? 
      <AllExpenses/>
    : null}

    {allTransactions === true ? 
    <AllTransactions />
    : null}

      
  </div>
  );
}

export default App;
