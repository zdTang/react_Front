/*=======================
FileName: index.jsx
Description: The entry point of application
Programmer: Zhendong Tang
First Version: March -1, 2021
========================*/ 

import React from 'react';
import ReactDOM from 'react-dom';
//import Cmp1 from './Cmp1';
//import Result from './components/Result';
import App from './components/App'
import './index.css';

import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
  <App/>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))  c
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
