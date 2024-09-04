import { useState } from 'react'

import { Routes,Route,BrowserRouter  } from 'react-router-dom'
import './App.css';
import Home from './pages/Home';
import Cource from './pages/Cource';
import Skillasses from './pages/Skillasses';
import Jobs from './pages/Job';
import Navbar from './Components/Navbar';

function App() {

  return (
    <>

    <Navbar/>

      <Routes>
          <Route path='/' Component={Home}/>
          <Route path='/cource' Component={Cource}/>
          <Route path='/jobs' Component={Jobs} />
          <Route path='/skillasses' Component={Skillasses}/>
        


      </Routes>

   

    </>
  )
}

export default App
