import React from 'react';
import cross from './cross-icon.svg';
import '../styles/Alert.css';

export const AlertDanger = () => (
  <div className="alert alert-danger">
    <p className="alert-danger__message">Invalid email or password!</p>
    <img className="alert-danger__cross" src={cross} alt="cross" />
  </div>
);
