import { useState } from 'react'
import './App.css'

function App() {
   const [counter, setCounter]=useState(15)

   const handleClick=()=>{
    setCounter(counter=>counter+5)
    setCounter(counter=>counter+5)
    
    setCounter(counter=>counter+5)
   }
  return (
    <>
      <button onClick={handleClick}>Click me, {counter}</button>
    </>
  )
}

export default App
