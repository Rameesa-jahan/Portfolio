import React from 'react'
import Navbar from './navbar'

function Projects() {
  return (
    <div className='projects-page'>
      <div className='projects-background'>
       <Navbar/>
       <div>
        <h1> My Recent  <span className='span-color'> Works </span> </h1>
        <h3> Here are a few projects I've worked on recently </h3>
       </div>
       </div>
    </div>
  )
}

export default Projects
