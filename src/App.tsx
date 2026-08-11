import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage";
import Signup from "./Pages/SignUp";
import "./index.css";


function App() {

  return (
    <div className="flex">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
