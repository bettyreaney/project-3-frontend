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
                    {item.category}
                    {item.addAmount}
                    {item.title}
                </li>
            )
        }) : null }
      
    </div>
  );
}

export default AllIncome;
