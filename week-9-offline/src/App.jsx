import { useState } from "react"
import { PostComponent } from "./Post"
import { useEffect } from "react"

function App() {

  const [showTimer, setShowTimer] = useState(true)

  useEffect(function (){
    setInterval(function (){
      setShowTimer(function(){
        return !showTimer;
      })
    },5000);
  }), [];

return <div>
  {showTimer && <Timer/>}
</div>
}

function Timer (){
  const [seconds, setSeconds] = useState(0)

  useEffect(function(){

    let clock = setInterval(function(){
      return setSeconds(function(currentSeconds){
        return currentSeconds + 1;
      })
    },1000);

    return function(){
      clearInterval(clock);
    }
  }),[];

  return <div>{seconds } seconds Lapsed...</div>
}

export default App