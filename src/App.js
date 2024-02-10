import React from 'react';
import './App.css';
import Plans from './Plans';
import Hero from "./Hero";
import Program from './Program';
import Reasons from './Reasons';
import Join from './Join';
import Contact from './Contact';
import Testimonials from './Testimonials';

function App() {
  return (
    <>
      <div id="hero" className="App-header">     
        <Hero></Hero>      
      </div>
      <div id="program" className='App-header'>
        <Program></Program>
      </div>
      <div id="reasons" className='App-header'>
        <Reasons></Reasons>
      </div> 
      <div id="plans" className='App-header'> <Plans></Plans></div>
      <div id="testimonials" className='App-header'><Testimonials></Testimonials></div>
      <div className='App-header'><Join></Join></div>
      <div className='App-header'>
        <Contact></Contact>
      </div>
    </>
  );
}

export default App;

