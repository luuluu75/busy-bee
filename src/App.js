import React from 'react';
import './App.css';
import './images/images';
import './components/newUser';
import './components/userLogin';
import './components/calendar';

const express = require('express');
const app = express();
const sequelize = require('sequelize');

const Routes = require('../api');

app.use('/api', Routes);



export default app;
