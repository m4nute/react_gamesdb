import React from 'react'
import 'bootswatch/dist/lux/bootstrap.min.css';
import '../src/App.css'
import Navbar from './Navbar';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Database from './Database';

function App() {
    return (
        <div>
            <div className="nav" >
                <Navbar />
            </div>
            <div className="columns" ><Routes><Route path='/' element={<Home />} />
                <Route path='/database' element={<Database />} />
            </Routes>
            </div>
        </div>)
}

export default App