import { useState } from 'react'
import Home from './pages/Home'
import { BrowserRouter, Link, Route, Routes } from 'react-router-dom'
import Projects from './pages/Projects'
import Contact from './pages/Contact'
import Navbar from './components/Navbar'


function App() {
  return (
    <>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element = {<Home/>}/>
      <Route path="/projects" element = {<Projects/>}/>
      <Route path="/contact" element = {<Contact/>}/>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
