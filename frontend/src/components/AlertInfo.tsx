import React from 'react';
import cross from './icons/cross-icon.svg';
import '../styles/Alert.css';

export const AlertInfo = () => (
  <div className="alert alert-info">
    <p className="alert-info__message">
      Contact our support team! Email us at email@gmail.com and we'll be happy
      to help you!
    </p>
    <img className="alert-info__cross" src={cross} alt="cross" />
  </div>
);
