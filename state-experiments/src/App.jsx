import { createContext, useContext, useState } from "react"

/* Step 1 : Create the bulb context */
const BulbContext = createContext();

function BulbContextProvider({ children }) {
  //Defining State Variables
  const [bulbOn, setBulbOn] = useState(true)

  //Step 2 : Wrap the State Varible inside ContextProvider
  return <BulbContext.Provider value={{
    bulbOn: bulbOn,
    setBulbOn: setBulbOn
  }}>
    {children}
  </BulbContext.Provider>
}

function App() {

  return (
    <BulbContextProvider>
      <Light />
    </BulbContextProvider>
  )
}

function Light() {


  return <div>
    <BulbState />
    <ToggleBulbState />
  </div>
}

function BulbState() {
  /* Step 3 : Reteriving the state varible from BulbContext */
  const { bulbOn } = useContext(BulbContext)

  return <div>
    {bulbOn ? "Bulb On " : "Bulb Off"}
  </div>
}

function ToggleBulbState() {
  /* Step 3 : Reteriving the state varible from BulbContext */
  const { setBulbOn } = useContext(BulbContext)

  function toggleBulbState() {
    setBulbOn(bulbstate => !bulbstate)
  }
  return <button onClick={toggleBulbState}>Toogle Bulb On/Off</button>
}

export default App
