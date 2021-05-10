import React, { setState } from 'react';
import Button from 'react-bootstrap/button';

const express = require('express');

const router = express.Router()

router.get('/api', (req, res) => {
    res.send('Post is working')
});

var loginUser = React.loginUser({ 
    handleClick: function(e) {
        console.log(this.prop);
    },
    render: function () {
        return (
            <div id="loginUser" uk-offcanvas="mode: reveal">...</div>
        )
    }
})
//user clicks Login In --> Login screen displays
//on click of submit --> user is authenticated
// Load hash from your password DB.

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = { target.value.password };

bcrypt.compare(myPlaintextPassword, hash, function(err, result) {
    // result == true
});
bcrypt.compare(someOtherPlaintextPassword, hash, function(err, result) {
    // result == false
});
//if successful --> trigger calendar.js functionality
//if unsuccessful --> display error message with link to newUser.js

export default loginUser;