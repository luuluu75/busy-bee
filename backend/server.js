const express = require("express");
require('dotenv').config();
const routes = require ("./routes")

const app = express();
const PORT = process.env.PORT || 8080;

//bypasses CORS error 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  // Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
// Serve up static assets (usually on heroku)
// if (process.env.NODE_ENV === "production") {
//   app.use(express.static("client/build"));
// }
// Add routes, both API and view
app.use(routes);

  
app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));   