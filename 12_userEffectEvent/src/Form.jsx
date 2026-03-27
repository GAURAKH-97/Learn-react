import { useState,useEffect,useEffectEvent } from "react"

function Form() {
    const [name, setName]= useState("")
    const [email, setEmail]= useState("")
    const myfun =useEffectEvent(()=>{
        console.log(name)
            console.log(email)
    })
    useEffect(()=>{
        const interval = setInterval(()=>{
            myfun()
        },2000)
        return () => {
            clearInterval(interval)
            console.log("Timer Cleared.")
        }

    },[])
    
  return (
    <form>
        <input type="text" value={name} onChange={(e)=>setName(e.target.value)}/>
        <input type="text" value={email} onChange={(e)=>setEmail(e.target.value)}/>
        <button type="submit" >submit</button>
    </form>
  )
}

export default Form