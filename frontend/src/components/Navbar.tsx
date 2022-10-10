import React from 'react';
import '../styles/Navbar.css';
import logo from './logo.svg';

export const Navbar = () => (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img src={logo} className="navbar__logo-image" alt="logo" />
          <p>Simple Project Initializer</p>
        </div>
        <button>Sign in</button>
      </div>
    </div>
);
