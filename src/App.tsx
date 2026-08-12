import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage";
import Signup from "./Pages/SignUp";
import Signin from "./Pages/SignIn";
import "./index.css";


function App() {

  return (
    <div className="flex-1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path='/login' element={<Signin/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
