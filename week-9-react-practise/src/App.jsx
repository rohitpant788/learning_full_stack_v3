import { useState } from "react"


function App() {

  return <>
    <Counter/>
  </>
}

function Counter(){


  //React doesnot rerenders itself if i create count as normal variables , 
  //rather it only rerenders if this is state variable 
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(count +1)
  }

  return <>
    <b>{count}</b><br/>
    <button onClick={increaseCount}>Increase Count</button>
  </>

}


export default App
