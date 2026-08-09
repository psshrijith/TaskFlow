import { BrowserRouter, Route, Routes } from "react-router-dom"
import LandingPage from "./Pages/LandingPage";
import "./index.css";

function App() {

  return (
    <div className="flex h-full w-full">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
  
}

export default App
