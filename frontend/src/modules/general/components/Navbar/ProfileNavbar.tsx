import React from 'react';
import './Navbar.css';
import logo from '../../../../assets/icons/logo.svg';
import { useNavigate } from "react-router-dom";

export const ProfileNavbar = () => {
    const navigate = useNavigate();
    const buttonRender = () => {
        return (
            <div>
                <button onClick={(e) => {
                    e.preventDefault();
                    navigate("");
                }}>Admin</button>
                                <button onClick={(e) => {
                    e.preventDefault();
                    localStorage.removeItem('jwt')
                    navigate("/signin");
                }}>Sign out</button> 
            </div>
        )
    }
    return (
        <div className="bg-theme-primary">
            <div className="navbar__container">
                <div className="navbar__logo">
                    <img className="navbar__logo-image" src={logo} alt="logo" />
                    <p>Simple Project Initializer</p>
                </div>
                {buttonRender()}
            </div>
        </div>
    )
};