import React, { useState, useEffect, SyntheticEvent, Children } from 'react';
import './Modal.css'
interface Props{
    active: boolean;
    setModalState: (active: boolean) => void;
    children: React.ReactNode;
}
const Modal: React.FC<Props> = ({active, setModalState,children}) => active ? (
        <div className='modal'onClick={()=>setModalState(false)}>
            <div className='modal__content' onClick={(e)=>e.stopPropagation()}>
                {children}
            </div>
        </div>
 ) : null;

export default Modal