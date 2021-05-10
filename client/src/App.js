import React from 'react';
import './App.css';
import '../public/images';
import './pages/newUser';
import './pages/userLogin';
import './pages/calendar';

const express = require('express');
const app = express();
const sequelize = require('sequelize');

// const Routes = require('../api');

// app.use('/api', Routes);



export default app;
