import { useState } from 'react'
import './App.css'
import BtnWhatsApp from './components/BtnWhatsApp'

import Start from './sections/Start'
import About from './sections/About'
import Especias from './sections/Especias'
import Medicos from './sections/Medicos'
import Ubications from './sections/Ubications'
import Contact from "./sections/Contact"
import Footer from './sections/Footer'
function App() {

  return (
    <div className=''>
      <BtnWhatsApp/>
      <Start/>
      <About/>
      <Especias/>
      <Medicos/>
      <Ubications/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
