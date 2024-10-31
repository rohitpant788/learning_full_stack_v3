import { useRef, useState } from "react"

function App() {

  //State Variables are guarded on state change, ie. they doesnot renders on state change.
  const [clock,setClock] = useState(0);
  
  const timer = useRef();

  function startClock (){
    let value = setInterval(function (){
      return setClock(c => c+1)
    },1000)

    timer.current = value;
  }

  function stopClock (){
    //Clearing a useRef will not trigger a rerender..
    clearInterval(timer.current)
  }

  return <div>
    {clock} <br/>
    <button onClick={startClock}>Start</button>
    <button onClick={stopClock}>Stop</button>
  </div>
}



export default App
