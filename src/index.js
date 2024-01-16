import React from 'react';
import ReactDOM from 'react-dom/client';
import './styles/App.css';
import App from './pages/App.js';
import ReactGA from 'react-ga';

const root = ReactDOM.createRoot(document.getElementById('root'));

ReactGA.initialize(process.env.REACT_APP_GOOGLE_ANALYTICS_ID);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

