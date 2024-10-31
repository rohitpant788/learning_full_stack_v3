import { useRef } from "react"

function App() {

  const inputRef = useRef();

  function handleOnClick(){
    inputRef.current.focus();
  }

  return <div>
    <input ref={inputRef} placeholder='Click the button to focus me'></input>
    <button onClick={handleOnClick}>Focus the Input Box</button>
  </div>
}



export default App
