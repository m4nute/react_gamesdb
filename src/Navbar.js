import React from 'react'
import './App.css'
import AOS from 'aos';
import 'aos/dist/aos.css';
import{Link}from 'react-router-dom';function Navbar(){const handleClick=(btn)=>{btn.blur()}
AOS.init({
  duration: 670,
  offset: 0,
  once: true
});
return(<div><nav data-aos='fade-down' className="navbar navbar-expand navbar-dark bg-dark"><Link className="navbar-brand" to="/">Games DB</Link>
<button
className="navbar-toggler"
type="button"
data-toggle="collapse"
data-target="#navbarsExample02"
aria-controls="navbarsExample02"
aria-expanded="false"
aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"/></button><div className="collapse navbar-collapse" id="navbarsExample02"><ul className="navbar-nav mr-auto"><li className="nav-item">
        <Link className="nav-link" to="/database" onClick={(e) => handleClick(e.target)}>
          Database
        </Link>
      </li></ul></div></nav></div>)}
export default Navbar