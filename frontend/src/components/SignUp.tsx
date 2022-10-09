import React from 'react';
import '../styles/SignUp.css';
import logo from './logo.svg';

export const SignUp = () => (
    <div className='SignUp'>
        <div className='FormContainer'>
            <img src={logo} className="Form-logo-image" alt="logo" />
            <p className='Title'>Sign up to SPI</p>
            <form className='SignUpForm'>
                <input type="text" value="Email" />
                <input type="text" value="Password"/>
                <input type="text" value="Repeat password"/>
                <button>Sign up</button>
            </form>
            <p className='Hint'>Already have an account? 
                <a> Sign in!</a>
            </p>
        </div>
    </div>
);