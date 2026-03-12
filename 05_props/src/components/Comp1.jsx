import React from 'react'

export default function Comp1(props) {
  return (
    <>
    <h1>component 1</h1>
    <p>hello {props.name}</p>
    <p>age is {props.age}</p>
    </>
  )
}
