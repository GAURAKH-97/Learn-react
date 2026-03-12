import './App.css'
import viteLogo from '/vite.svg'
function App() {
  function onclick(){
    console.log("hello world")
  }
  const myfun =function (){
    console.log("double click")
  }
  const hover =()=> alert("hover effect")
  return (
    <div style={{padding:"20px"}}>

      <h2>Mouse Events</h2>

      <button onClick={onclick}>onClick</button>
      <button onDoubleClick={myfun}>onDoubleClick</button>
      <p onMouseOver={hover}>Mouse Over</p>
      <p onMouseDown={() => console.log("onMouseDown")}>Mouse Down</p>
      <p onMouseUp={() => console.log("onMouseUp")}>Mouse Up</p>
      <p onMouseMove={() => console.log("onMouseMove")}>Mouse Move</p>
      <p onMouseEnter={() => console.log("onMouseEnter")}>Mouse Enter</p>
      <p onMouseLeave={() => console.log("onMouseLeave")}>Mouse Leave</p>
      
      <p onMouseOut={() => console.log("onMouseOut")}>Mouse Out</p>

      <h2>Keyboard Events</h2>

      <input placeholder="Key Down" onKeyDown={() => console.log("onKeyDown")} />
      <input placeholder="Key Up" onKeyUp={() => console.log("onKeyUp")} />
      <input placeholder="Key Press" onKeyPress={(e) => console.log("Pressed key:", e.key)}/>

      <h2>Form Events</h2>

      <form onSubmit={(e) => {e.preventDefault(); console.log("onSubmit")}}>
        <button type="submit">Submit Form</button>
      </form>

      <input placeholder="Change Event" onChange={() => console.log("onChange")} />
      <input placeholder="Input Event" onInput={() => console.log("onInput")} />

      <h2>Focus Events</h2>

      <input placeholder="Focus Event" onFocus={() => console.log("onFocus")} />
      <input placeholder="Blur Event" onBlur={() => console.log("onBlur")} />

      <h2>Clipboard Events</h2>

      <input 
        placeholder="Copy / Cut / Paste"
        onCopy={() => console.log("onCopy")}
        onCut={() => console.log("onCut")}
        onPaste={() => console.log("onPaste")}
      />

      <h2>Drag Events</h2>

      <div
        draggable="true"
        style={{border:"1px solid black", padding:"10px"}}
        onDrag={() => console.log("onDrag")}
        onDragStart={() => console.log("onDragStart")}
        onDragEnd={() => console.log("onDragEnd")}
      >
        Drag Me
      </div>

      <div
        style={{border:"1px solid red", padding:"20px", marginTop:"10px"}}
        onDragEnter={() => console.log("onDragEnter")}
        onDragLeave={() => console.log("onDragLeave")}
        onDragOver={(e)=> e.preventDefault()}
        onDrop={() => console.log("onDrop")}
      >
        Drop Here
      </div>

      <h2>Touch Events (Mobile)</h2>

      <div
        style={{border:"1px solid blue", padding:"20px"}}
        onTouchStart={() => console.log("onTouchStart")}
        onTouchMove={() => console.log("onTouchMove")}
        onTouchEnd={() => console.log("onTouchEnd")}
      >
        Touch Area
      </div>

      <h2>Image Events</h2>

      <img
        src={viteLogo}
        alt="demo"
        onLoad={() => console.log("onLoad")}
        onError={() => console.log("onError")}
      />

      <h2>Animation & Transition</h2>

      <div
        style={{
          width:"100px",
          height:"100px",
          background:"green",
          transition:"all 1s"
        }}
        onTransitionEnd={() => console.log("onTransitionEnd")}
      >
        Transition Box
      </div>

    </div>
  )
}

export default App
