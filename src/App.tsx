import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  const incrementCount = () => setCount((prevCount) => prevCount + 1);

  return(
    <div>
      <button
        onClick={incrementCount}
      >Increment</button>
      <p>{count}</p>
    </div>
  )
}

export default App
