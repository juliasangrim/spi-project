/* eslint-disable jsx-a11y/no-static-element-interactions */
import React from 'react';
import './Modal.css';
import ButtonClose from '../Button/ButtonClose';

interface Props{
    isActive: boolean;
    setModalState: (isActive: boolean) => void;
    children: React.ReactNode;
}
function Modal({
  isActive, setModalState, children,
}: Props) {
  return (
    isActive ? (
      <div className="modal" onClick={() => setModalState(false)}>
        <div className="modal__content relative" onClick={(e) => e.stopPropagation()}>
          <button
            type="button"
            className="text-gray-500 absolute top-0 right-0 hover:text-black py-2 px-3 rounded-tr-xl"
            onClick={() => setModalState(false)}
          >
            x
          </button>
          {children}
        </div>
      </div>
    ) : <span style={{ display: 'none' }} />
  );
}

export default Modal;
