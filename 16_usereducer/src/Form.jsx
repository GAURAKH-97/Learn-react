import {useReducer} from 'react'
function myfun(formdata, action){
    return{...formdata, [action.name]:[action.value]}
}
export default function Form() {
    const [formdata, setFormdata]=useReducer(myfun, {name:"",email:""})
  return (
    <>
    <input type="text"placeholder='name' value={formdata.name} name="name"onChange={(e)=>{setFormdata({name:e.target.name, value:e.target.value})}}/>
    <br/>
    <br/>
    <input type="email" placeholder='email' name="email" value={formdata.email} onChange={(e)=>{setFormdata({name:e.target.name, value:e.target.value})}}/>
    
    <p>Name: {formdata.name}</p>
    <p>Email: {formdata.email}</p>
    </>
  )
}
