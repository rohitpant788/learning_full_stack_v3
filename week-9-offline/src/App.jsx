import { useState } from "react"
import { PostComponent } from "./Post"
import { useEffect } from "react"

function App() {

  const [currenTab, setCurrenTab] = useState(1)
  const [tabData, setTabData] = useState({})
  const [loading, setLoading] = useState(true)

  useEffect(function(){
    console.log("fetching data for tab #" +currenTab)
    setLoading(true)
    fetch("https://jsonplaceholder.typicode.com/todos/"+currenTab)
    .then( async res => {
      const json = await res.json();
      setTabData(json);
      setLoading(false);
    })


  },[currenTab])



  return (
    <div>
      <button onClick={function () {
        setCurrenTab(1)
      }} style={{ color: currenTab == 1 ? "red" : "black" }}>Todo #1</button>
      <button onClick={function () {
        setCurrenTab(2)
      }} style={{ color: currenTab == 2 ? "red" : "black" }}>Todo #2</button>
      <button onClick={function () {
        setCurrenTab(3)
      }} style={{ color: currenTab == 3 ? "red" : "black" }}>Todo #3</button>
      <button onClick={function () {
        setCurrenTab(4)
      }} style={{ color: currenTab == 4 ? "red" : "black" }}>Todo #4</button>

      <br/>
      {loading ? "Loading........." : tabData.title}
    </div>
  )
}

export default App