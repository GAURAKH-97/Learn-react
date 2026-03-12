import React from 'react'
import "./Comp.css"
export default function Comp2() {
  const stylecss={
      fontSize:50
    }
  return (
    
    <>
    <div className='app'>app.css file css working</div>
    <div className='test'>This is Comp2</div>
    <div style={{color:'green', fontSize:40}}> this is inline css</div>
    <div style={stylecss}>this also a inline css with variable injection</div>
    </>
  )
}
