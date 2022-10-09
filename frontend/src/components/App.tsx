import React from 'react';
import { Navbar } from './Navbar';
import { SignUp } from './SignUp';
import { SignIn } from './SignIn';
import '../styles/App.css';
import '../styles/fonts.css';

export const App = () => (
    <div className='App'>
        <Navbar />
        {/* <SignUp /> */}
        <SignIn />
    </div>
);