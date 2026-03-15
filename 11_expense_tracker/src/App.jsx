import { useState, useEffect } from 'react'
// import './App.css'
import Expenseform from './Components/expenseform'
import Expencelist from './Components/Expencelist'
function App() {
	const [expenses, setExpences]= useState(()=>{
		const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : [];
	});
	const addexpences=(data)=>{
		setExpences((prev)=>[...prev, data])
		
	}
	useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expenses))
  },[expenses])
	const deleteexpence=(data)=>{
		setExpences((prev)=>prev.filter((expenses)=>expenses.id!=data))
		
	}
	

  return (
    <div className="app-container">
	<h1>💰 Expense Tracker</h1>
	<Expenseform onAddexpences={addexpences}/>
	<h3 className="total">Total Expense: ₹750.00</h3>
	<Expencelist expenses={expenses} ondelete={deleteexpence}/>
	</div>
  
  )
}

export default App
