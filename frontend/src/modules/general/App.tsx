import React, { useEffect } from 'react';
import {
  Routes, Route, useNavigate,
} from 'react-router-dom';
import { Navbar } from './components/Navbar/Navbar';
import { SignInForm } from '../auth/components/SignInForm/SignInForm';
import { SignUpForm } from '../auth/components/SignUpForm/SignUpForm';
import './styles/fonts.css';
import './styles/css-reset.css';
import './App.css';
import API from './Api';
import ApiProvider from "../../context/apiContext";
import AddTemplate from "../template/components/AddTemplate";
import TemplateList from "../template/components/TemplateList";

const handleGetUserRoles = async (
  token: string,
  navigate: (a: string) => void,
) => {
  const response = await API.makeRequest({ endpoint: 'user', method: 'GET', headers: { Authorization: `Bearer ${token}` } });
  const { roles } = response.data;

  if (roles.includes('admin')) {
    navigate('admin');
  } else {
    navigate('signin');
  }
};

function App() {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('jwt');
    if (token) {
      handleGetUserRoles(token, navigate);
    } else {
      localStorage.setItem('userRole', 'guest');
    }
  }, []);

  return (
      <ApiProvider>
        <div className="app">

          <Routes>
            <Route path={'/templates'} element={
              <div>
                <Navbar navType='signin' />
                <TemplateList />
              </div>} />
            <Route path={'/add-template'} element={
              <div>
                <Navbar navType='signin' />
                <AddTemplate />
              </div>} />
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
      </ApiProvider>
  )
}

export default App;

