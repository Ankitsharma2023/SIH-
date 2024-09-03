import { useState } from 'react'
import Navbar from '../Components/Navbar'
import './App.css'
import Card from '../Components/Card1'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Card/>
      <Navbar/>
    </>
  )
}

export default App
