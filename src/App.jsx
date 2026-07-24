import { useState } from 'react'
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import {Routes,Route} from "react-router-dom";
import './App.css'

function App() {

  // const 

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1">
          <Routes>
            <Route path='/' element={<Home/>} />
            <Route path="/about" element = {<About />} />
          </Routes>
        </main>
        

        <Footer />

      </div>
    </>
  )
}

export default App
