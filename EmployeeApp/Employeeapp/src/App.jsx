import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './Components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Add from './Components/Add'
import View from './Components/View'

function App() {
  const [count, setCount] = useState(0)

  return (
    <> 
      <Navbar />
      <Routes>
        <Route path='/add' element={<Add/>} />
        <Route path='/view' element={<View />} />
      </Routes>
      
    </>
  )
}

export default App
