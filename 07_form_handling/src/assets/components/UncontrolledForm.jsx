import {useRef} from 'react'

function UncontrolledForm() {
    const nameref = useRef()
    const emailref = useRef()
    const handlesubmit =(e)=>{
        e.preventDefault();
        console.log("Name: ", nameref.current.value)
        console.log("Email: ", emailref.current.value)
    }
  return (
    <>
    <form onSubmit={handlesubmit}>
        <input type="text" ref={nameref} ></input>
        <input type="email" ref={emailref}></input>
        <button type="submit">submit</button>
    </form>
    </>
  )
}

export default UncontrolledForm