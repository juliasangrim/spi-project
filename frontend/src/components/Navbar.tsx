import React from 'react';
import '../styles/Navbar.css';
import logo from './logo.svg';

export const Navbar = () => (
    <div className='NavbarContainer'>
        <div className='Navbar'>
            <div className="Navbar-logo">
                <img src={logo} className="Navbar-logo-image" alt="logo" />
                <p>Simple Project Initializer</p>
            </div>
            <button>Sign in</button>
        </div>
    </div>
);
