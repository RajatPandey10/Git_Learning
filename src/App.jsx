import { useState } from 'react'
import Navbar from './Components/Navbar.jsx';
import About from './Components/About.jsx';
import Home from './Components/Home.jsx';
import Footer from './Components/Footer.jsx';
import Contact from './Components/Contact.jsx';
import {Routes,Route} from "react-router-dom";
import './App.css'

function App() {

  // const 

  return (
    <>
      <div className="min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-1 flex">
          <Routes>
            
            <Route path='/' element={<Home/>} />
            <Route path="/about" element = {<About />} />
            <Route path='/contact' element = {<Contact/>}/>
          </Routes>
        </main>
        

        <Footer />

      </div>
    </>
  )
}

export default App
