import React, { useState, useEffect, SyntheticEvent } from 'react';
import { useNavigate } from "react-router-dom";
import '../styles/SignUpForm.css';
import logo from './icons/logo.svg';
import { AlertDanger } from './AlertDanger';
import { signupRequest } from '../services/HttpService';
const EMAIL_REGEX = /^[a-zA-Z0-9_!#$%&'*+/=?`{|}~^.-]+@[a-zA-Z0-9.-]+$/;
const PWD_REGEX = /^(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,32}$/;


export const SignUpForm = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState('');
  const [pwd, setPwd] = useState('');
  const [confirmPwd, setConfirmPwd] = useState('');

  const [emailErr, setEmailErr] = useState('');
  const [pwdErr, setPwdErr] = useState('');
  const [confirmPwdErr, setConfirmErr] = useState('');
  const [requestErr, setRequestErr] = useState('');

  const emailValid = (value: string) => {
    let valid = true
    if (!value) {
      valid = false
      setEmailErr('Please enter Email.')
    }
    else if (!EMAIL_REGEX.test(value)) {
      valid = false
      setEmailErr('Email wrong format.')
    }
    else
      setEmailErr('')
    return valid
  }

  const pwdValid = (value: string) => {
    let valid = true
    if (!value) {
      valid = false
      setPwdErr('Please enter password.')
    }
    else if (!PWD_REGEX.test(value)) {
      valid = false
      setPwdErr("Password format: 8 - 32 characters long,   " +
        "at least one uppercase, one lowercase letter (A, z), " +
        "one numeric character (0-9).")
    }
    else
      setPwdErr('')

    if (confirmPwdErr)
      if (value !== confirmPwd) {
        valid = false
        setConfirmErr('Password and Confirm Password does not match.')
      }
      else
        setConfirmErr('')
    return valid
  }
  const confirmPwdValid = (value: string) => {
    let valid = true
    if (value !== pwd) {
      valid = false
      setConfirmErr('Password and Confirm Password does not match.')
    } else setConfirmErr('')
    return valid
  }
  const submitHandler = (e: any) => {
    e.preventDefault()
    if (!(emailValid(email) && pwdValid(pwd) && confirmPwdValid(confirmPwd)))
      return

    signupRequest(email, pwd)
      .then((res) => {
        if (!res.data.apiError) {
          navigate('/signin')
        }
        else {
          //все что возвращает api помимо "User already exist" невозможно не user friendly и код ошибки одинаковый !!!
          setRequestErr(res.data.apiError.message)
        }
      })
      .catch((err) => {
        console.log(err)
        setRequestErr('Server connection error.')
      })
  }

  const allertRender = () => {
    let errText: string = ''
    if (emailErr)
      errText = emailErr
    else if (pwdErr)
      errText = pwdErr
    else if (confirmPwdErr)
      errText = confirmPwdErr
    else if (requestErr)
      errText = requestErr
    if (errText)
      return (
        <AlertDanger text={errText} />
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
              setRequestErr('')
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
              setRequestErr('')

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
