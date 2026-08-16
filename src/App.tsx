import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage";
import Signup from "./Pages/SignUp";
import Signin from "./Pages/SignIn";
import Dashboard from "./Pages/Dashboard";
import Settings from "./Pages/Settings";
import "./index.css";


function App() {

  return (
    <div className="flex-1">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
          <Route path="/signup" element={<Signup/>} />
          <Route path="/login" element={<Signin/>} />
          <Route path="/dashboard" element={<Dashboard/>} />
          <Route path="/settings" element={<Settings/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
