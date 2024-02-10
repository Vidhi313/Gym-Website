 import React from 'react';
 import './hero.css';
 import Header from "./Header";
 import hero_image  from './assets/hero_image.png';
 import hero_image_back from './assets/hero_image_back.png';
 import Heart from './assets/heart.png';
 import Calories from './assets/calories.png';
 import {motion} from "framer-motion";


const Hero = () => {
    const transition = {type:'spring', duration:3}
  return (
    
   <div className='hero'>
    <div className=' blur hero-blur'></div>
        <div className='left-h'>
         <Header></Header>
         <div className='space'></div>   
        <div className='the-best-ad'>

            <motion.div
            initial = {{left:'238px'}}
            whileInView = {{left:'8px'}}
           transition={{...transition, type:"tween"}}
            ></motion.div>
        <span>The best fitness club in the town</span>
        </div>
    <div div className='hero-text'>
    <div>
            <span className='stroke-text'>Shape</span> 
            <span> Your</span>
        </div>
        <div className='stok-text'><span>Ideal body</span></div></div>
         <div><span >
        In here we will help you to shape and 
        build your ideal body and live your life to fullest.
        </span>  
        </div> 
     
    
    <div className='figures'>
        <div>
            <span> + 140</span>
            <span>EXPERT COACHES</span>
        </div>
        <div>
            <span> + 978</span>
            <span>MEMBERS JOINED</span>
        </div>
        <div>
            <span> + 50</span>
            <span>FITNESS PROGRAMS</span>
    
    </div>
    
    
    </div>  
    <div className='hero-buttons'>
        <button className='btn'>Get Started</button>
        <button className='btn'>Learn More</button>
     

     </div>
     </div>



    <div  className='right-h'>
        
      <button className='btn'> Join Now</button>
     <motion.div 
        initial={{right:"-1rem"}}
        whileInView={{right:"4rem"}}
        transition={transition}
     
     className='heart-rate'>
        <img src={Heart}  alt='' className='Heart'></img>
        <span>Heart Rate</span><span> 116 bpm</span>
     </motion.div>
    
      <motion.img 
      initial={{right:"11rem"}}
      whileInView={{right:"20rem"}}
      transition={transition}
      src={hero_image_back} alt='' className='hero-image-back'></motion.img> 
       <img
     src={hero_image} url='C:\Users\ASUS\gym-app\src\assets\hero_image.png' alt='' className='hero-image'></img>
     <motion.div 
      initial={{right:"37rem"}}
      whileInView={{right:"30rem"}}
      transition={transition}
     className='calories'>
         <img src={Calories} alt=''></img> 
        <div>
        <span>Calories Burned</span>
        <span> 220 kcal</span>
        </div>
         </motion.div>
   </div>
   
</div>
  )
}
export default Hero