import './AllExpenses.css';
import { useState, useEffect } from 'react';

function AllExpenses() {

const [allExpenses, setAllExpenses] = useState([])

useEffect(() => {
    fetch('http://localhost:3001/money')
    .then(res => res.json())
    .then(data => {
      const filteredItem = data.filter(item => item.category.includes("Expense"))
      setAllExpenses(filteredItem)
      filteredItem.forEach(item => {

      })
    })
}, [])

async function handleDelete (id) {
 const data = await fetch(`http://localhost:3001/money/${id}`, {
    method: 'DELETE',
  })
  setAllExpenses(prevState => ({
    data,
  }))
};


  return (
    <div className="App">
      <header className="App-header">
        
      </header>
        
      <h3 id="expenses">All Expenses</h3>

        {allExpenses.length ? allExpenses.map(item => {
            return(
                <li>
                  <button id="deleteBtn" type="submit" onClick={ (id) => {handleDelete(item._id)} }>🗑</button>
                    {item.addAmount}{" "}
                    {item.title}
                    {/* <button id="editBtn" type="submit">Edit</button> */}
                </li>
            )
        }) : null }
      
    </div>
  );
}

export default AllExpenses;
 