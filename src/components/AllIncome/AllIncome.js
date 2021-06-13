import './AllIncome.css';
import { useState, useEffect } from 'react';

function AllIncome() {

const [allIncome, setAllIncome] = useState([])

useEffect(() => {
    fetch('http://localhost:3001/money')
    .then(res => res.json())
    .then(data => {
      const filteredItem = data.filter(item => item.category.includes("Income"))
      setAllIncome(filteredItem)
      filteredItem.forEach(item => {

      })
    })
}, [])

async function handleDelete (id) {
  const data = await fetch(`http://localhost:3001/money/${id}`, {
     method: 'DELETE',
   })
   setAllIncome(prevState => ({
     data,
   }))
 };

  return (
    <div className="App">
      <header className="App-header">
        
      </header>

      <h3 id="income">All Income</h3>
        
        {allIncome.length ? allIncome.map(item => {
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

export default AllIncome;
