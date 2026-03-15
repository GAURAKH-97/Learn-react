import {useState} from 'react'

export default function Expenseform({onAddexpences}) {
	const [title, setTitle]= useState("")
	const [amount, setAmount]= useState('')
	const handlesubmit =(e)=>{
		e.preventDefault();
		onAddexpences({
			id: Date.now(),
			title,
			amount
		})
		setAmount("")
		setTitle("")
	}
  return (
    <form className="expense-form" onSubmit={handlesubmit}>
			<input placeholder="Expense Title" type="text" value={title} onChange={(e)=>setTitle(e.target.value)}/>
			<input placeholder="Amount ₹" type="number" value={amount} onChange={(e)=>setAmount(e.target.value)}/>
			<button type="submit">Add Expense</button>
		</form>
  )
}
