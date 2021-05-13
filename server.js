// Dependencies
const express = require('express');
require("dotenv").config();

const app = express();
const sequelize = require('./config/connection');
const routes = require('./routes');
const PORT = process.env.PORT || 8080;

app.get("/", (req, res) => res.send("Home"));

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// if (process.env.NODE_ENV === "production") {
//     app.use(express.static("client/build"));
//   }

app.use(routes);
  
// // Static directory
// app.use(express.static('/App'));

// Starts the DB server to begin listening
sequelize.sync({ force: false }).then(() => {
    sequelize.listen(PORT, () => console.log('Now listening'));
  });
 
//Starts API server
  app.listen(PORT, function() {
    console.log(`🌎  ==> API Server now listening on PORT ${PORT}!`);
  });
  
