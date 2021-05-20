const path = require("path");
const router = require("express").Router();
const userRoute = require("./api/userRoute");
const calendarItemRoute = require ("./api/calendarItemsRoute");
const calendarRoute = require("./api/calendarRoute");


// API Routes
router.use("/api/user", userRoute);
router.use("/api/calendarItems", calendarItemRoute);
router.use("/api/calendar", calendarRoute);

// If no API routes are hit, send the React app
router.use(function(req, res) {
  res.sendFile(path.join(__dirname, "../client/build/index.html"));
});

module.exports = router;
