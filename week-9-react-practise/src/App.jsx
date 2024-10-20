import { useEffect, useState } from "react"

function App() {

  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  function increaseCount1(){
    setCount(count => count + 1)
  }

  function decreaseCount2(){
    setCount2(count2 => count2 - 1)
  }
  return <>
    <Counter count1={count} count2={count2} />
    <button onClick={increaseCount1}>Increase Count 1</button>
    <button onClick={decreaseCount2}>Decrease Count 2</button>
  </>
}

function Counter(props) {

  useEffect(function(){
    console.log("On Component Mount")

    return function(){
      console.log("On Component UnMount");
    }
  },[]);

  useEffect(function(){
    console.log("On Component Mount")

    return function(){
      console.log("On Component UnMount");
    }
  },[props.count1]);

  return <>
    <b>{props.count1}</b><br />
    <b>{props.count2}</b><br />
  </>

}

export default App
