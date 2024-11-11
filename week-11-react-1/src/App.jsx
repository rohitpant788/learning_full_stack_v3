import { useState } from 'react'
import './App.css'

function useCounter(){
  const [count, setCount] = useState(0);

  function increaseCount(){
    setCount(c => c+1)
  }

  return {
    count : count,
    increaseCount : increaseCount
  }

}

function App() {

const {count, increaseCount} = useCounter();

  return (
    <>
      <button onClick={increaseCount}>Increase {count}</button>
    </>
  )
}

export default App
