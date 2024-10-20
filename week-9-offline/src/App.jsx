import { useState } from "react";

function App() {

  const appComponentSyle = {
    backgroundColor: "#dfe6e9",
    height: "100vh"
  }

  return (
    <div style={appComponentSyle}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <ToggleMessage />
      </div>
    </div>
  )
}

function ToggleMessage() {

  const [isVisible, setIsVisible] = useState(true)


  function toggle() {
    return setIsVisible(!isVisible);
  }

  return <div>
    <button onClick={toggle}>Toggle Message</button>

    {isVisible && <p> This message is conditionally rendered !</p>}
  </div>
}



export default App
