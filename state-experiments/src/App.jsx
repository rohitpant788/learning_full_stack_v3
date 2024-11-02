import { useState } from "react"

function App() {
  return (
    <Light/>
  )
}


function Light(){
  const [bulbOn,setBulbOn] = useState(true)

  return <div>

    {/* Passing props to children */}
    <BulbState bulbOn={bulbOn}/>
    <ToggleBulbState setBulbOn={setBulbOn}/>
    
  </div>
}

function BulbState({bulbOn}){
  

  return <div>
    {bulbOn ? "Bulb On ": "Bulb Off"}
  </div>
}

function ToggleBulbState({setBulbOn}){
  function toggleBulbState(){
    setBulbOn(bulbstate=>!bulbstate)
  }
  return <button onClick={toggleBulbState}>Toogle Bulb On/Off</button>
}

export default App
