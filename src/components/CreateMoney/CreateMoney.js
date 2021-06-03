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
        <h1>Project 3</h1>
      </header>

      <form onSubmit={evt => handleSubmit(evt) } >

          <strong>Select Category</strong>
          <select name="category" id="category" value={category} onChange={handleChange}>
            <option value="income">Income</option>
            <option value="expense">Expense</option>
          </select>

          <label htmlFor="addAmount">Add Amount</label>
          <input type="text" name="addAmount" id="addAmount" onChange={handleChange} />

          <label htmlFor="title">Title</label>
          <input type="text" name="title" id="title" onChange={handleChange} />

          <input type="submit" />

        </form>

    </div>
  );
}

export default CreateMoney;
