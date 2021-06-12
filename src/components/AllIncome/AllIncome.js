import './AllIncome.css';
import { useState, useEffect } from 'react';

function AllIncome() {

const [allItems, setAllItems] = useState([])

useEffect(() => {
    fetch('http://localhost:3001/money')
    .then(res => res.json())
    .then(data => {
      const filteredItem = data.filter(item => item.category.includes("Income"))
      setAllItems(filteredItem)
      filteredItem.forEach(item => {

      })
    })
}, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <h3 id="income">All Income</h3>
        
        {allItems.length ? allItems.map(item => {
            return(
                <li>
                    <button id="deleteBtn" type="submit">🗑</button>
                    {item.addAmount}{" "}
                    {item.title}
                    {/* <button id="editBtn" type="submit">Edit</button> */}
                </li>
            )
        }) : null }
      
    </div>
  );
}

export default AllIncome;
