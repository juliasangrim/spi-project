import React from 'react';
import { Navbar } from './Navbar';
import { SignUpForm } from './SignUpForm';
import { SignInForm } from './SignInForm';
import '../styles/fonts.css';
import '../styles/css-reset.css';
import '../styles/App.css';

export const App = () => (
    <div className="app">
      <Navbar />
      {/* <SignUpForm /> */}
      <SignInForm />
    </div>
);
