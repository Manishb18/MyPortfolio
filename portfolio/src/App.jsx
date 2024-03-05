import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'
import {FaBars, FaTimes} from "react-icons/fa";
import Home from './components/Home';
import SocialLinks from './components/SocialLinks';
import About from './components/About';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';

function App() {

  return (
      <div className='flex flex-col'>
        <Navbar/>
        <Home/>
        <SocialLinks/>
        <About/>
        <Projects/>
        <Experience/>
        <Contact/>
      </div>
  )
}

export default App