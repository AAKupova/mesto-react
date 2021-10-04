import React from 'react';
import ReactDOM from 'react-dom';
import { App } from './pages/App';

import './styles/fonts/fonts.css';
import './styles/normalize.css';
// import './styles/index.css';
import { createGlobalStyle } from 'styled-components';

const GlobalBody = createGlobalStyle`
  body {
    background-color: #000;
    font-family: 'Inter', Arial, sans-serif;
    font-style: normal;
  }

`;
ReactDOM.render(
  <React.StrictMode>
    <GlobalBody />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
