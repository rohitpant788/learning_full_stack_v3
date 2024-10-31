import { useState } from 'react'
import { BrowserRouter, Link, Route, Routes, useNavigate } from 'react-router-dom'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <BrowserRouter>
        <Link to="/">Allen</Link> | 
        <Link to="/neet/online-coaching-class-11">Class11</Link> | 
        <Link to="/neet/online-coaching-class-12">Class12</Link>
        <Routes>
          <Route path="/" element={<LandingPage />}></Route>
          <Route path="/neet/online-coaching-class-11" element={<Class11Program />}></Route>
          <Route path="/neet/online-coaching-class-12" element={<Class12Program />}></Route>
          <Route path="/*" element={<NoPage />}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

function NoPage(){
  return <div>No Page 404...</div>
}
function LandingPage() {
  return <div>Welcome to Allen... !</div>
}

function Class11Program() {
  return <div> This is for Class 11 Program...!</div>
}

function Class12Program() {

  const  navigate = useNavigate()

  function redirectUser(){
    navigate("/")
  }

  return <div> This is for Class 12 Program...!
    <button onClick={redirectUser}>Back To Landing Page..</button>
  </div>
}

export default App
