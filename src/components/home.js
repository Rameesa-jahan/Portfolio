import React from 'react';
import Navbar from './navbar';
import './style.css'
import { AiFillInstagram } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";

function Home() {
  return (
    <div className='main'>
    <div className='home-page'>
      <Navbar/>
      <div className='home-left'>
        <h2 className='hello-text'> Hello! It's Me</h2>
        <h1 className='name'> RAMEESA JAHAN</h1>
        <h1> Front-end Developer</h1>
      </div>
      </div>
      <div className='intro'>
        <div className='introduction'>
          <div className='about-me'>
         <h1> LET ME  <span className='span-color'> INTRODUCE </span> MYSELF</h1>
         <h4> I fell in love with programming and I have learned alot ...  and still I'm learning. </h4>
         <h4> Its very interesting to design, and it feels like heaven when it shows the functionalities working properly.</h4>
         <h4> Whenever possible, I also apply my passion for desigining and making something beautiful with</h4>
         <h4> the Modern Javascript Library and Framework!! <span className='span-react'>  REACT JS </span></h4>
         </div>

          <div className='contact-me'>
            <h6> FIND  <span className='span-color'>ME </span> ON</h6>
            <h4> Feel free to  <span className='span-color'> connect </span> with me</h4>
          </div>

          <div className='contact-icons'> </div>
           <button onclick="location.href='https://instagram.com/ja_ha_n__?igshid=NmQ2ZmYxZjA=';" className='instagram'> <AiFillInstagram/> </button> 
           <button className='linked-in'><AiFillLinkedin/> </button>
         </div> 
             <h5>Designed and Developed by RAMEESA JAHAN</h5>
      </div>
    </div>
  )
}

export default Home
