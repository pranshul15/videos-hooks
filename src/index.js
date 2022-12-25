import React from 'react';
import ReactDOM18 from 'react-dom/client';
import App from './components/App';

const container = document.querySelector('#root');
const root = ReactDOM18.createRoot(container);
root.render(<App />)