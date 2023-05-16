import { Link, Route, Routes } from 'react-router-dom'
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import topbar from './components/topbar/Topbar.jsx'
import './App.css'
import './scss/global.scss'
import Styleguide from './views/styleguide/Styleguide.jsx'
import Topbar from './components/Topbar/Topbar.jsx'



function App() { 

  return (
    <>
    <main>
    <Topbar>
      <Routes>
        <Route path="/styleguide" element={<Styleguide />} />   
      </Routes>
    </Topbar>
  </main>
  </>
  )
}
export default App
