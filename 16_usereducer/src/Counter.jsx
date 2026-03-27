import {useReducer} from 'react'

function reducer(state, action){
    switch(action.type){
        case "INC":
            return {counter: state.counter+1}
        case "DEC":
            return {counter: state.counter-1}
        default:
            return state
    }
}
export default function Counter() {
    const [state, dispatch]=useReducer(reducer, {counter:0})
  return (
    <>
    <p>{state.counter}</p>
    <button onClick={()=>dispatch({type:"INC"})}>incerase</button>
    <button  onClick={()=>dispatch({type:"DEC"})}>decrease</button>
    </>
  )
}
