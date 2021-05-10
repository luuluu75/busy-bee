import React, { setState } from 'react';
import Button from 'react-bootstrap/button';



var createUser = React.createUser({
    handleClick: function(e) {
        console.log(this.prop);
    },
    render: function () {
        return (
            <div id="createUser" uk-offcanvas="mode: reveal">
                <Name />
                <Email />
                <Password />
            </div>
        )
    }
})
//from the home page, if 

//user clicks creat new --> new user page loads
//require name, email, password
//on click of submit --> call newUser api to save and store user

const bcrypt = require('bcrypt');
const saltRounds = 10;
const myPlaintextPassword = (this.Password);


bcrypt.genSalt(saltRounds, function(err, salt) {
    bcrypt.hash(myPlaintextPassword, salt, function(err, hash) {
        // Store hash in your password DB.
    });
})
//if successful --> trigger calendar.js functionality
//if unsuccessful --> display error message 

export default createUser;