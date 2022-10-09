import React from 'react';
import '../styles/SignIn.css';
import logo from './logo.svg';

export const SignIn = () => (
    <div className='SignIn'>
        <div className='FormContainer'>
            <img src={logo} className="Form-logo-image" alt="logo" />
            <p className='Title'>Sign in to SPI</p>
            <form className='SignInForm'>
                <input type="text" placeholder="Email" />
                <input type="password" placeholder="Password"/>
                {/* TODO: input type="submit", update styles */}
                <button>Sign in</button>
            </form>
            <pre className='Hint'>New user? <a>Sign up!</a></pre>
            <p className='Hint'><a>Forgot password?</a></p>
        </div>
    </div>
);