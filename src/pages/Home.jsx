import { useState } from 'react'
import Navbar from '../Components/Navbar'
import Card from '../Components/Card1'

function Home () {
  const [count, setCount] = useState(0)

  return (
    <>
      
      <Card/>
      <Navbar/>
    </>
  )
}

export default Home;