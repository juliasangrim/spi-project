import React from 'react';
import './Navbar.css';
import { useNavigate } from 'react-router-dom';
import logo from '../../../../assets/icons/logo.svg';

function ProfileNavbar() {
  const navigate = useNavigate();
  const buttonRender = () => (
    <div>
      {/*TODO: Должен выводится userName, а не везде Admin
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          navigate('');
        }}
      >
        Admin
      </button>*/}
      <button
        type="button"
        onClick={(e) => {
          e.preventDefault();
          localStorage.removeItem('jwt');
          navigate('/signin');
        }}
      >
        Sign out
      </button>
    </div>
  );
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

export default ProfileNavbar;
