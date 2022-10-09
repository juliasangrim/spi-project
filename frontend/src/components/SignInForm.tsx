import React from 'react';
import '../styles/SignInForm.css';
import logo from './logo.svg';

export const SignInForm = () => (
    <div className="sign-in-form">
      <div className="sign-in-form__container">
        <img src="{logo}" className="sign-in-form__logo-image" alt="logo" />
        <p className="sign-in-form__title">Sign in to SPI</p>
        <form className="sign-in-form__input-container">
          <input
            className="sign-in-form__input-field"
            type="text"
            placeholder="Email"
          />
          <input
            className="sign-in-form__input-field"
            type="password"
            placeholder="Password"
          />
          <input
            className="sign-in-form__submit-button"
            type="submit"
            value="Sign in"
          />
        </form>
        <pre className="sign-in-form__hint">New user? <a>Sign up!</a>
            </pre>
        <pre>
            <a>Forgot password?</a></pre>
      </div>
    </div>
);