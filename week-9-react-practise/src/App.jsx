import { useEffect, useState } from "react"

function App() {

  const [counterVisble, setCounterVisible] = useState(true);

  useEffect(function () {
    setInterval(function () {
      setCounterVisible(function (counterVisble) {
        return !counterVisble
      })
    }, 5000);
  }, []);

  return <>
    {counterVisble && <Counter />}
  </>
}

function Counter() {
  //React doesnot rerenders itself if i create count as normal variables , 
  //rather it only rerenders if this is state variable 
  const [count, setCount] = useState(0);


  console.log("counter");
  useEffect(function () {
    console.log("On Component Mount")
    let clock = setInterval(
      function () {
        console.log("from inside setInterval");
        setCount(function (count) {
          return count + 1;
        })
      },
      1000)
    return function () {
      console.log("On Unmount....");
      clearInterval(clock);
    }
  }, []);

  return <>
    <b>{count}</b><br />
  </>

}

export default App
