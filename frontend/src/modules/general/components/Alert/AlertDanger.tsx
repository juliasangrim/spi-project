import React from 'react';
import cross from '../../../../assets/icons/cross-icon.svg';
import './Alert.css';

export const AlertDanger = ({ text = "Invalid email or password!" }: { text?: string }) => (
  <div className="alert alert-danger">
    <p className="alert-danger__message">{text}</p>
    <img className="alert-danger__cross" src={cross} alt="cross" />
  </div>
);
