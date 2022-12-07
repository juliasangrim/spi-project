import React from 'react';
import cross from '../../../../assets/icons/cross-icon.svg';
import './Alert.css';

function AlertDanger({ text = 'Invalid email or password!', hide }: { text?: string, hide: () => void }) {
  return (
    <div className="alert alert-danger">
      <p className="alert-danger__message">{text}</p>
      <img onClick={hide} className="alert-danger__cross" src={cross} alt="cross" />
    </div>
  );
}

export default AlertDanger;
