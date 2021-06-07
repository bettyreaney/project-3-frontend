import './AllExpenses.css';
import { useState, useEffect } from 'react';

function AllExpenses() {

const [allExpenses, setAllExpenses] = useState([])

useEffect(() => {
    fetch('http://localhost:3001/money')
    .then(res => res.json())
    .then(data => setAllExpenses(data))
}, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
        
        {allExpenses.length ? allExpenses.map(item => {
            return(
                <li>
                    {item.expense}
                    <button id="deleteBtn" type="submit">🗑</button>
                    {item.addAmount}
                    {item.title}
                    <button id="editBtn" type="submit">Edit</button>
                </li>
            )
        }) : null }
      
    </div>
  );
}

export default AllExpenses;
