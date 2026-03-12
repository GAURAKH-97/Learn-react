import Comp1 from './components/Comp1'
import Comp2 from './components/Comp2'
import Comp3 from './components/Comp3'
import Button from './components/Button'
import User from './components/User'
import Wrapper from './components/Wrapper'
import Childrencomp from './components/Childrencomp'
import Childernfunc from './components/Childernfunc'
import './App.css'

function App() {
function message1(){
  alert("hello wrold")

}

  return (
    <>
      <Comp1 name="Toxic" age={30}/>
      <Comp2 name="shadow" age={19}/>
      <Comp3/>
      <User name="Gaurakh" age={24} />
      <User name={123} age="twenty" />
      <Button label="click me" callmefun={message1}/>
      <Wrapper>
        <h2>Hello Gaurakh</h2>
        <p>This is children content</p>
      </Wrapper>
      <Childrencomp>
        <h1>Title</h1>
        <p>Description</p>
        <button>Click</button>
      </Childrencomp>

   

     

      <Childernfunc>
        {(name) => <h1>Hello {name}</h1>}
      </Childernfunc>
    </>
  )
}

export default App
