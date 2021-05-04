import React from 'react';
import ReactDOM from 'react-dom';
import '../db/connection';
import App from './App';

// const router = require('express').Router();
// const userRoutes = require('./userRoutes');

// router.use('/users', userRoutes);

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);




// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

module.exports = router;
