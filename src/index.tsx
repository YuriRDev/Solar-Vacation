import React from 'react';
import ReactDOM from 'react-dom';
import Main from './pages/Main';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './global'
import Form from './pages/Form';
import MainRoutes from './routes';

import { BrowserRouter } from 'react-router-dom'

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStyles />
      <MainRoutes />
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
