import React from 'react';
import cross from '../../../../assets/icons/cross-icon.svg';
import './Alert.css';

function AlertInfo() {
  return (
    <div className="alert alert-info">
      <p className="alert-info__message">
        Contact our support team! Email us at email@gmail.com and we&aposll be happy
        to help you!
      </p>
      <img className="alert-info__cross" src={cross} alt="cross" />
    </div>
  );
}

export default AlertInfo;
