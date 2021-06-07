import './AllIncome.css';
import { useState, useEffect } from 'react';

function AllIncome() {

const [allItems, setAllItems] = useState([])

useEffect(() => {
    fetch('http://localhost:3001/money')
    .then(res => res.json())
    .then(data => setAllItems(data))
}, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>
        
        {allItems.length ? allItems.map(item => {
            return(
                <li>
                    {item.income}
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

export default AllIncome;
