import React from 'react';
import '../styles/SignUpForm.css';
import logo from './logo.svg';

export const SignUpForm = () => (
    <div className="sign-up-form">
      <div className="sign-up-form__container">
        <img src={logo} className="sign-up-form__logo-image" alt="logo" />
        <p className="sign-up-form__title">Sign up to SPI</p>
        <form className="sign-up-form__input-container">
          <input
            className="sign-up-form__input-field"
            type="text"
            placeholder="Email"
          />
          <input
            className="sign-up-form__input-field"
            type="text"
            placeholder="Password"
          />
          <input
            className="sign-up-form__input-field"
            type="text"
            placeholder="Repeat password"
          />
          <input
            className="sign-up-form__submit-button"
            type="submit"
            value="Sign up"
          />
        </form>
        <pre
          className="sign-up-form__hint"
        >Already have an account? <a>Sign in!</a>
            </pre>
      </div>
    </div>
);
