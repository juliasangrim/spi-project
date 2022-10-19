import React from 'react';
import { Navbar } from './Navbar';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';
import '../styles/fonts.css';
import '../styles/css-reset.css';
import '../styles/App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

export const App = () => (
  <Router>
    <div className="app">

      <Routes>
        <Route path='/signup' element={
          <div>
            <Navbar navType='signup' />
            <SignUpForm />
          </div>} />
        <Route path='/signin' element={
          <div>
            <Navbar navType='signin' />
            <SignInForm />
          </div>} />
          
        <Route path={'/'} element={
          <div>
            <Navbar navType='signin' />
            <SignInForm />
          </div>} />
      </Routes>
    </div>
  </Router>
);
