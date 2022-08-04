import React from 'react'
import 'bootswatch/dist/lux/bootstrap.min.css';import '../src/App.css'
import Navbar from './Navbar';import{Route,Routes}from 'react-router-dom';import Home from './Home';import Database from './Database';import About from './About';function App(){return(<div><div className="nav"><Navbar></Navbar></div><div className="columns"><Routes><Route path='/' element={<Home/>}></Route><Route path='/database' element={<Database/>}></Route><Route path='/about' element={<About/>}></Route></Routes></div></div>)}
export default App