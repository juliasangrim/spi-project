import React from 'react';
import '../styles/SignUp.css';
import logo from './logo.svg';

export const SignUp = () => (
    <div className='SignUp'>
        <div className='FormContainer'>
            <img src={logo} className="Form-logo-image" alt="logo" />
            <p className='Title'>Sign up to SPI</p>
            <form className='SignUpForm'>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password"/>
                <input type="password" placeholder="Repeat password"/>
                {/* TODO: input type="submit", update styles */}
                <button>Sign up</button>
            </form>
            <pre className='Hint'>Already have an account? <a>Sign in!</a>
            </pre>
        </div>
    </div>
);