import React, {
  useState, useEffect, SyntheticEvent, Children,
} from 'react';
import './Modal.css';

interface Props{
    isActive: boolean;
    setModalState: (active: boolean) => void;
    children: React.ReactNode;
}
function Modal({
  isActive, setModalState, children,
}: Props) {
  return (
    isActive && (
      <div className="modal" onClick={() => setModalState(false)}>
        <div className="modal__content" onClick={(e) => e.stopPropagation()}>
          {children}
        </div>
      </div>
    )
  );
}

export default Modal;
