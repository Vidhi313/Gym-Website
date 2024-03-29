import React from 'react';
import './header.css';
import Logo from './assets/logo.png';

const Header = () => {
  return (
    <div className="header">
      <img src={Logo} alt="" className="logos" />

      <ul className="header-menu">
        <li><a href="#hero">Home</a></li>
        <li><a href="#program">Programs</a></li>
        <li><a href="#plans">Plans</a></li>
        <li><a href="#testimonials">Testimonials</a></li>
      </ul>
    </div>
  )
}

export default Header;

