import React from "react";

export default function Expenseitem({item, ondelete}) {
  return (
    
    <div className="expense-item" >
      <span>{item.title} </span>
      <span>₹{item.amount}</span>
      <button onClick={()=>ondelete(item.id)}>❌</button>
    </div>
  );
}
