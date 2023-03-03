import React from 'react'
import Navbar from './navbar'

function About() {
  return (
    <div>
       <div className='about-page'>
        <div className='about-background'>
       <Navbar/>
       <div className='about-text'>
        <h1> Know Who <span className='span-color'>I'm  </span></h1>
        <h2> Hi Everyone, I am <span className='span-color'> Rameesa jahan </span>from kerala,India.</h2> 
        <div className='hobbies'>
        <h3> Apart from coding, some other activities that I love to do!</h3>
        <ul>
          <li> Reading</li>
          <li> Travelling</li>
          <li> Playing games</li>
        </ul>
        </div>
        </div>
        </div>
       </div>
    </div>
  )
}

export default About
