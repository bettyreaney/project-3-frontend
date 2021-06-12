import './AllTransactions.css';
import { useState, useEffect } from 'react';

function AllTransactions() {

const [allTransactions, setAllTransactions] = useState([])

useEffect(() => {
    fetch('http://localhost:3001/money')
    .then(res => res.json())
    .then(data => setAllTransactions(data))
}, [])

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <h3 id="allTransactions">All Transactions</h3>
        
        {allTransactions.length ? allTransactions.map(item => {
            return(
                <li>
                    <button id="deleteBtn" type="submit">🗑</button>
                    {item.category}{" "}
                    {item.addAmount}{" "}
                    {item.title}
                    {/* <button id="editBtn" type="submit">Edit</button> */}
                </li>
            )
        }) : null }
      
    </div>
  );
}

export default AllTransactions;
