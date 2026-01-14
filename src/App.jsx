import React from 'react'
import Navbar from './components/Navbar'
import Selector from './components/Selector'
import Half_Adder from './components/Half_Adder'
import Full_Adder from './components/Full_Adder'

import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  return (
    <BrowserRouter>
    <Navbar />
    <Selector />
    <Routes>
      <Route path='/half-adder' element={<Half_Adder />}/>
      <Route path='/full-adder' element={<Full_Adder />}/>
    </Routes>
    </BrowserRouter>
    
    
  )
}

export default App
