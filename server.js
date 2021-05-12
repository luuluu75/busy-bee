// Dependencies
const express = require('express');
require("dotenv").config();
const routes = require('./routes');

// Sets up the Express App
const app = express();
const PORT = process.env.PORT || 8080;


// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('/App'));

// Routes
app.get('/',(req,res) => {
    res.send("Buzy Bees")
});

app.use(routes);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
