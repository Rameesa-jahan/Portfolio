import React from 'react';
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <div className='Nav-main'>
      <div className='logo'>
        <img src='logo-rj.png'/>
      </div>
      <div className='navbar'>
        <Link to='/'><h3 className='home'> Home</h3></Link>
        <Link to='/about'> <h3 className='about'> About</h3></Link>
        <Link to='/projects'>  <h3 className='projects'> Projects</h3></Link>
        <Link to='/resume'>  <h3 className='resume'> Resume</h3></Link>
      </div>
    </div>
  )
}

export default Navbar
