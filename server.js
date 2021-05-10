// Dependencies
const express = require('express');

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
    res.send("Hello World")
});

// require('./src/routes')(app);

// Starts the server to begin listening
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
