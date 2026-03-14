import {useState} from 'react'

export default function SimpleForm() {
    const [name, setname] = useState("")
    const [email, setemail] = useState("")
    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log("Name: ", name)
        console.log("Email: ", email)
    }
  return (
    <>
    <form onSubmit={handlesubmit}>
        <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}}></input>
        <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}}></input>
        <button type="submit">submit</button>
    </form>
    </>
  )
}
