import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignInForm from '../auth/components/SignInForm/SignInForm';
import SignUpForm from '../auth/components/SignUpForm/SignUpForm';
import './styles/fonts.css';
import './styles/css-reset.css';
import './App.css';

function App() {
  return (
    <Router>
      <div className="app">

        <Routes>
          <Route
            path="/signup"
            element={(
              <div>
                <Navbar navType="signup" />
                <SignUpForm />
              </div>
              )}
          />
          <Route
            path="/signin"
            element={(
              <div>
                <Navbar navType="signin" />
                <SignInForm />
              </div>
        )}
          />

          <Route
            path="/"
            element={(
              <div>
                <Navbar navType="signin" />
                <SignInForm />
              </div>
        )}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
