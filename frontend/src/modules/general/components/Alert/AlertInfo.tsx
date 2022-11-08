import React from 'react';
import cross from '../../../../assets/icons/cross-icon.svg';
import './Alert.css';

function AlertInfo({ text = 'Contact our support team! Email us at email@gmail.com and we will be happy to help you!', hide }: { text?: string, hide: () => void }) {
  return (
    <div className="alert alert-info">
      <p className="alert-info__message">{text}</p>
      <img onClick={hide} className="alert-info__cross" src={cross} alt="cross" />
    </div>
  );
}

export default AlertInfo;
