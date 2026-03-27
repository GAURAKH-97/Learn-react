import React from 'react'
import {useCart} from '../context/Cartcontext'
export default function ProductCard({data}) {
  const {addToCart} =useCart()
  return (
    <>
          {console.log(data)}
          <div className="card shadow-sm h-100 text-center">
            <div className="card-body">
              <h5 className="card-title">{data.name}</h5>
              <p className="card-text">${data.price}</p>
              <button className="btn btn-primary" onClick={() => addToCart(data)}>Add to Cart</button>
            </div>
          </div>
        </>
  )
}
