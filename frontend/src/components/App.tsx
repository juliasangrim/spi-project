import * as React from 'react';
import ReactPng from '../assets/images/react.png';

export const App = ({ text = "text" }: { text?: string }) => (
    <div>
        <h1 className="temp">
            {text}
        </h1>
        <img src={ReactPng}/>
    </div>
);