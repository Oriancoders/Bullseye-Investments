import React, { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';
import './index.css';
import { GlobalProvider } from './GlobalStates/GlobalState.jsx';

const root = ReactDOM.createRoot(document.getElementById('root'));
    root.render(
      <React.StrictMode>
        <BrowserRouter>
        <GlobalProvider>
          <App />
        </GlobalProvider>
        </BrowserRouter>
      </React.StrictMode>
    );