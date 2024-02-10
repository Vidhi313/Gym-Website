import React from 'react'
import "./Plans.css";
import {plansData} from './data/plansData';
import whiteTick from './assets/whiteTick.png';

const Plans = () => {
  return (
    <div className='plans-container'>
        <div className='blur blur-plan'></div>
        <div className='blur blur-plan2'></div>
        <div className='programs-header' style={{gap:'2rem'}}>
            <span className='stroke-text'>READY TO START</span>
            <span className='journey'>YOUR JOURNEY</span>
            <span className='stroke-text'>NOW WITHUS</span>
        </div>
        
        
        <div className="plans">
            {plansData.map((plan, i) => (
                <div className='plan' key={i}>
                    {plan.icon}
                    {plan.name}
                    <span> $ {plan.price}</span>
                    <div className='features'> {
                        plan.features.map((features,i) => (
                            <div className='feature'>
                                <img src={whiteTick} alt=''></img>
                                <span key={i}>{features}</span>
                            </div>
                        ))
                    }</div>
                    <div>
                        <span>See more benefits -</span>
                    </div>
                    <button className='btn'>Join now</button>
                </div>
            
            ))}
            <div></div>
            
        </div>
    </div>
  )
}

export default Plans