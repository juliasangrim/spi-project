import React from 'react';
import { createRoot } from 'react-dom/client';
import './styles.css'

import { App } from './components/App';


const container = document.getElementById('root');
const root = createRoot(container!); 
root.render(<App text="home" />);