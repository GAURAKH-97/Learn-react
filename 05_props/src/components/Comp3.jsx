import React from 'react'

export default function Comp3({name="toxic", age}) {
  return (
    <>
    <h1>component 3</h1>
    <p>hello {name}</p>
    <p>age is {age}</p>
    </>
  )
}
