import './CreateMoney.css';
import { useState, useEffect } from 'react';

function CreateMoney() {

  const [budgets, setBudgets] = useState([])
  const [category, setCategory] = useState('Income')
  const [addAmount, setAddAmount] = useState('')
  const [title, setTitle] = useState('')

  const handleChange = evt => {
    if (evt.target.id === 'category') setCategory(evt.target.value)
    if (evt.target.id === 'addAmount') setAddAmount(evt.target.value)
    if (evt.target.id === 'title') setTitle(evt.target.value)
    // if (evt.target.id === 'income') setTitle(evt.target.value)
    console.log(category)
  }

  console.log(budgets);

  const handleSubmit = evt => {
    evt.preventDefault()
    const form = evt.target
    const data = {
      category: category,
      addAmount: addAmount,
      title: title,
      // income: income,
    }
    fetch('http://localhost:3001/money', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(data)
    })
    .then(res => res.json())
    .then(data => {
      setBudgets(data)
      form.reset()
    })
    .catch(err => console.log(err))
  };


  return (
    <div className="CreateMoney">
      <header className="CreateMoneyHeader">
        <h2>Add a New Transaction</h2>
      </header>

      <form id="newTransaction" onSubmit={evt => handleSubmit(evt) } >

          <strong> Select Category </strong>
          <select name="category" id="category" value={category} onChange={handleChange}>
            <option value="Income">Income</option>
            <option value="Expense">Expense</option>
          </select>

          <label htmlFor="addAmount"> Add Amount </label>
          <input type="text" name="addAmount" id="addAmount" onChange={handleChange} />

          <label htmlFor="title"> Title </label>
          <input type="text" name="title" id="title" onChange={handleChange} />

          <input id="submit" type="submit" />

        </form>

    </div>
  );
}

export default CreateMoney;
