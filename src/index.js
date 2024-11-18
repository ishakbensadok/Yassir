import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter
      future={{
        v7_startTransition: true, // Opt-in for React.startTransition
        v7_relativeSplatPath: true, // Opt-in for relative Splat path resolution changes
      }}
    >
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
// <React.StrictMode>
//   <App />
// </React.StrictMode>;
