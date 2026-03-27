import {useState} from 'react'

export default function Statelifting() {
    const [count, setCount] = useState(0);
  return (
  <>
      <Button setCount={setCount} />
      <Display count={count} />
    </>
  )
}
function Button({ setCount }) {
  return <button style={{border:"2px solid red"}} onClick={() => setCount(c => c + 1)}>increase</button>;
}

function Display({ count }) {
  return <h1 style={{border:"2px solid green"}}>{count}</h1>;
}