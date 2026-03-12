import React from 'react'
import style from './Comp1.module.css'
export default function Comp1() {
  return (
    <>
    <div className='app'>app.css file css working</div>
    <div className='test'>This is component 1</div>
    <div className={style.mytest}> this is comp1 css</div>
    </>
  )
}
