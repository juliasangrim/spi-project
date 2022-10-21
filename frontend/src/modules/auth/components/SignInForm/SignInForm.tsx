import React, {useState} from 'react';
import { AlertDanger } from '../../../general/components/Alert/AlertDanger';
import { AlertInfo } from '../../../general/components/Alert/AlertInfo';
import './SignInForm.css';
import logo from '../../../../assets/icons/logo.svg';
import {AuthService} from "../../services/AuthService";


export const SignInForm = () => {
    const [isShowAlertDangerWindow, setIsShowAlertDangerWindow] = useState(false)
    const [isShowAlertInfoWindow, setIsShowAlertInfoWindow] = useState(false)
    const [formState, setFormState] = useState({
        email: '',
        password: ''
    })

    const handleEmailInputChange = (e) => {
        setFormState({...formState, email: e.target.value})
    }

    const handlePasswordInputChange = (e) => {
        setFormState({...formState, password: e.target.value})
    }

    const showAlertWindows = () => {
        setIsShowAlertDangerWindow(true)
        setIsShowAlertInfoWindow(true)
    }

    const hideAlertWindows = () => {
        setIsShowAlertDangerWindow(false)
        setIsShowAlertInfoWindow(false)
    }

    const tryLogin = (e) => {
        e.preventDefault();
        AuthService.sendLoginRequest(formState.email, formState.password)
            .then((response) => {
                localStorage.setItem('jwt', response.data.token)
                hideAlertWindows()
            })
            .catch((error) => {
                console.log(error)
                showAlertWindows()
            })
    }

    return (
        <div className="sign-in-form">
            <div className="sign-in-form__container">
                <img className="sign-in-form__logo-image" src={logo} alt="logo" />
                <p className="sign-in-form__title">Sign in to SPI</p>
                <form className="sign-in-form__input-container">
                    <input
                        className="sign-in-form__input-field"
                        type="text"
                        placeholder="Email"
                        onChange={handleEmailInputChange}
                    />
                    <input
                        className="sign-in-form__input-field"
                        type="password"
                        placeholder="Password"
                        onChange={handlePasswordInputChange}
                    />
                    <input
                        className="sign-in-form__submit-button"
                        type="submit"
                        value="Sign in"
                        onClick={tryLogin}
                    />
                </form>
                <pre className="sign-in-form__hint">New user? <a>Sign up!</a>
            </pre>
                <pre className="sign-in-form__hint">
            <a>Forgot password?</a></pre>
            </div>

            {isShowAlertDangerWindow ? <AlertDanger /> : null}
            {isShowAlertInfoWindow ? <AlertInfo /> : null}
        </div>
    );

}
