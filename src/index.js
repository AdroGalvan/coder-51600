import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);

// mensaje pesaña blur

let previusTitle = document.title

window.addEventListener('blur', () => {
  previusTitle = document.title
  document.title = '🛒 Compra Pendiente 🛒'
} )

window.addEventListener('focus', () => {
  document.title = previusTitle
})