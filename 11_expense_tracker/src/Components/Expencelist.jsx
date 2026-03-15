import React from 'react'
import Expenseitem from './Expenseitem'
export default function Expencelist({expenses, ondelete}) {
  if(expenses.length === 0){
        return <p className='no-expense '>No Expenses Yet</p>
    }
  return (
    <div className="expense-list">
      {expenses.map((item)=>(<Expenseitem item={item} ondelete={ondelete}key={item.id}/>))}
			
		</div>
  )
}
