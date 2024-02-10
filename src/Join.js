import React, { useRef } from 'react'
import "./Join.css";
import emailjs from '@emailjs/browser';

const Join = () => {
  
  const form = useRef() 
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_s64ympd', 'template_v18155k', form.current, 'Sdy4obHZZ_w3RXoLGs')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
  };
  return (

    <div  className='Join' id='join-us'>
      
        <div className='left-j'>
            <hr></hr>
            <span className='stroke-text'>READY TO</span>
            <span>  LEVEL UP</span>
          <div></div>
            <span>YOUR BODY</span>
            <span className='stroke-text'>  WITH US?</span>
        </div>
        <div className='right-j'> 
        <form  ref= {form} action='' className='email-container'   onSubmit={sendEmail}>
         <input type='email' name='user_email' placeholder='Enter your Email address'></input>
         <button className='btn btn-j'>Join Now</button>
          </form>
        </div>
    </div>
  )
}

export default Join