import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import {Routes , Route } from 'react-router-dom'

import Landing from './Pages/Landing'
import { MenuPage } from './Pages/MenuPage'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Routes>
        <Route path='/' element={<Landing/>}/>
        <Route path='/home' element={<Landing/>}/>
        <Route path='/menupage' element={<MenuPage/>}/>
      </Routes>
    </>
  )
}

export default App