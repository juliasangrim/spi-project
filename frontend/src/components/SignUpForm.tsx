import React, { useState } from 'react';
import '../styles/SignUpForm.css';
import logo from './icons/logo.svg';
import { AlertDanger } from './AlertDanger';

interface event { target: { name: string, value: string } }

export const SignUpForm = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPassword: ''
  })

  const onInputChange = (e: event) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
    validateInput(e);
  }


  const validateInput = (e: event) => {
    const { name, value } = e.target;
    setError(prev => {
      const stateObj = { ...prev, [name]: "" };

      switch (name) {
        case "email":
          if (!value) {
            stateObj[name] = "Please enter Username.";
          }
          break;

        case "password":
          if (!value) {
            stateObj[name] = "Please enter Password.";
          } else if (input.confirmPassword && value !== input.confirmPassword) {
            stateObj["confirmPassword"] = "Password and Confirm Password does not match.";
          } else {
            stateObj["confirmPassword"] = input.confirmPassword ? "" : error.confirmPassword;
          }
          break;

        case "confirmPassword":
          if (!value) {
            stateObj[name] = "Please enter Confirm Password.";
          } else if (input.password && value !== input.password) {
            stateObj[name] = "Password and Confirm Password does not match.";
          }
          break;

        default:
          break;
      }
      return stateObj;
    });
  }

  const allertRender = () => {
    let text: string = ''
    let k: keyof typeof error;
    for (k in error) {
      if (error[k]) {
        text = error[k]
        break
      }
    }
    if (text)
      return (
        <AlertDanger text={text} />
      )
  }
  return (
    <div className="sign-up-form">
      <div className="sign-up-form__container">
        <img src={logo} className="sign-up-form__logo-image" alt="logo" />
        <p className="sign-up-form__title">Sign up to SPI</p>
        <form className="sign-up-form__input-container">
          <input
            className="sign-up-form__input-field"
            type="email"
            placeholder="Email"
            name='email'
            value={input.email}
            onChange={onInputChange}
            onBlur={validateInput}
          />
          <input
            className="sign-up-form__input-field"
            type="password"
            placeholder="Password"
            name='password'
            value={input.password}
            onChange={onInputChange}
            onBlur={validateInput} />
          <input
            className="sign-up-form__input-field"
            type="password"
            placeholder="Repeat password"
            name='confirmPassword'
            value={input.confirmPassword}
            onChange={onInputChange}
            onBlur={validateInput} />
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
      {allertRender()}
    </div>
  );
} 
