import React from 'react';
import ReactDOM from 'react-dom/client'; // Import from 'react-dom/client'
import './styles/main.css'; // Make sure this path is correct if you moved it
import App from './App';
import { BrowserRouter } from 'react-router-dom'; // Import BrowserRouter


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </BrowserRouter>
);

