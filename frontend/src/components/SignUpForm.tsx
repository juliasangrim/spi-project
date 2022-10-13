import React, { useState } from 'react';
import '../styles/SignUpForm.css';
import logo from './icons/logo.svg';

export const SignUpForm = () => {
  const [input, setInput] = useState({
    email: '',
    password: '',
    confirmPwd: ''
  });
  const [error, setError] = useState({
    email: '',
    password: '',
    confirmPwd: ''
  })

  const onInputChange = (e: { target: { name: string; value: string; }; }) => {
    const { name, value } = e.target;
    setInput(prev => ({
      ...prev,
      [name]: value
    }));
}

const validateInput = (e: { target: { name: any; value: any; }; }) => {
  let { name, value } = e.target;

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
          name='confirmPwd'
          value={input.confirmPwd}
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
  </div>
);
}
