import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Navbar.css';
import logo from '../../../../assets/icons/logo.svg';

function Navbar({ navType }:{navType: string}) {
  const navigate = useNavigate();
  const buttonRender = () => {
    if (navType === 'signup') {
      return (
        <button
          type="button"
          onClick={(e) => {
            e.preventDefault();
            navigate('/signin');
          }}
        >
          Sign in
        </button>
      );
    }
    return (
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          navigate('/signup');
        }}
      >
        Sign up
      </button>
    );
  };
  return (
    <div className="navbar">
      <div className="navbar__container">
        <div className="navbar__logo">
          <img className="navbar__logo-image" src={logo} alt="logo" />
          <p>Simple Project Initializer</p>
        </div>
        {buttonRender()}
      </div>
    </div>
  );
}

export default Navbar;
