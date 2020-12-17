import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';

// import App from './App/App';
import './index.css';
import LandingPage from './LandingPage/LandingPage';

ReactDOM.render(
  <BrowserRouter>
    <LandingPage />
  </BrowserRouter>,
  document.getElementById('root')
);
