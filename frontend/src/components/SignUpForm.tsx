import React, { useState, useEffect, SyntheticEvent } from 'react';
import '../styles/SignUpForm.css';
import logo from './icons/logo.svg';
import { AlertDanger } from './AlertDanger';
import { signupRequest } from '../services/HttpService';
const EMAIL_REGEX = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
const PWD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;


export const SignUpForm = () => {
  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const [emailErr, setEmailErr] = useState('');
  const [pwdErr, setPwdErr] = useState('');
  const [confirmPwdErr, setConfirmErr] = useState('');

  const emailValid = (value: string) => {
    if (!value) {
      setEmailErr('Please enter Email')
    }
    else if (!EMAIL_REGEX.test(value))
      setEmailErr('Email wrong format')
    else
      setEmailErr('')
  }

  const pwdValid = (value: string) => {
    if (!value)
      setPwdErr('Please enter password')
    else if (!PWD_REGEX.test(value))
      setPwdErr("Password format: 8 - 32 characters long,   " +
        "at least one uppercase, one lowercase letter (A, z), " +
        "one numeric character (0-9).")
    else
      setPwdErr('')

    if (confirmPwdErr )
      if (value !== confirmPwd)
        setConfirmErr('Password and Confirm Password does not match.')
      else
        setConfirmErr('')

  }
  const confirmPwdValid = (value: string) => {
    setConfirmErr('')
    if (value !== pwd)
      setConfirmErr('Password and Confirm Password does not match.')
  }
  const submitHandler = (e: SyntheticEvent) => {
    e.preventDefault()

    signupRequest(email, pwd)
      .then((res) => {
        console.log('success ', res)
      })
      .catch((err) => {
        console.log(err)
        // if (!err.response) {
        //   setErrMsg('No Server Response');
        // } else {
        //   setErrMsg('Registration Failed')
        // }
      })
  }

  const allertRender = () => {
    let text: string = ''
    if (emailErr)
      text = emailErr
    else if (pwdErr)
      text = pwdErr
    else if (confirmPwdErr)
      text = confirmPwdErr

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
        <form className="sign-up-form__input-container" onSubmit={submitHandler}>
          <input
            className="sign-up-form__input-field"
            type="text"
            placeholder="Email"
            name='email'
            value={email}
            onChange={(e) => {
              setEmail(e.target.value)
              if (emailErr)
                emailValid(e.target.value)
            }}
            onBlur={(e) => {
              emailValid(e.target.value)
            }}
          />
          <input
            className="sign-up-form__input-field"
            type="password"
            placeholder="Password"
            name='password'
            value={pwd}
            onChange={(e) => {
              setPwd(e.target.value)
              if (pwdErr || confirmPwdErr)
                pwdValid(e.target.value)
            }}
            onBlur={(e) => {
              pwdValid(e.target.value)
            }}
          />
          <input
            className="sign-up-form__input-field"
            type="password"
            placeholder="Repeat password"
            name='confirmPwd'
            value={confirmPwd}
            onChange={(e) => {
              setConfirmPwd(e.target.value)
              if (confirmPwdErr)
                confirmPwdValid(e.target.value)
            }}
            onBlur={(e) => {
              confirmPwdValid(e.target.value)
            }}
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
      {allertRender()}
    </div>
  );
} 
