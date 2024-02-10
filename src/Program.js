import React from 'react'
import "./Program.css"
import RightArrow from "./assets/rightArrow.png";
import {programsData} from "./data/programsData";

const Program = () => {
  return (
    <div className='Programms' id='programs'>
    <div className='programs-header'>
        <span className='stroke-text'>Explore our</span>
        <span className='pro'>Programs</span>
        <span className='stroke-text'>to shape you</span>
        </div>
        <div className='program-categories'>
            {programsData.map((program) => (
                <div className='category'>
                   <span> {program.image}</span>
                    <span>{program.heading}</span>
                    <span>{program.details}</span>
                    <span className='join-now'>Join Now 
                    <img src={RightArrow} alt=''></img></span>
                     </div>
            ))}
        </div>
        
        </div>
  )
}

export default Program