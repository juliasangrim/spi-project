import React from 'react';
import '../styles/Navbar.css';
import logo from './icons/logo.svg';

export const Navbar = () => (
  <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img className="navbar__logo-image" src={logo} alt="logo" />
          <p>Simple Project Initializer</p>
        </div>
        <button>Sign up</button>
        {/* <button>Sign in</button> */}
      </div>
    </div>
);
