import React from 'react'
import "./Contact.css";
import github from "./assets/github.png";
import insta from "./assets/instagram.png";
import linkedin from "./assets/linkedin.png";
import Logo from "./assets/logo.png";
const Contact = () => {
  return (
    <div className='Contact'>
      
        <hr className='contact-hr'></hr>
        
    
    < div className='contacts'>
    
          <span><img src={github} alt=''></img></span> 
          <span><img src={insta} alt=''></img></span> 
            <span><img src={linkedin} alt=''></img></span>
        
    </div>
    
    <div className='logo'><img src = {Logo} alt="" className="logo"></img></div>
    </div>
  )
}

export default Contact