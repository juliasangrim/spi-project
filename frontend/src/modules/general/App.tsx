import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import SignInForm from '../auth/components/SignInForm/SignInForm';
import SignUpForm from '../auth/components/SignUpForm/SignUpForm';
import './styles/fonts.css';
import './styles/css-reset.css';
import './App.css';
import API from './Api';

const handleUserRole = async (setUserRole: object, token: string) => {
  const response = await API.makeRequest({ endpoint: 'user', method: 'GET', headers: { Authorization: `Bearer ${token}` } });
  console.log(response);
};

function App() {
  const [userRole, setUserRole] = useState('guest');

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      // make request
    //   API.makeRequest({ endpoint: 'user', method: 'GET', headers: { AUTHORIZATION: token } });
      handleUserRole(setUserRole, token);
    } else {
      localStorage.setItem('userRole', 'guest');
    }
  }, []);

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
