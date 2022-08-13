import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import '../src/responsive.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <BrowserRouter >
        <App />
    </BrowserRouter>
);
reportWebVitals();