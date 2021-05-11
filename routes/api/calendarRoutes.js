const router = require("express").Router();
const calendarController = require("../../controllers/calendarItemsController");

// Matches with "/api/calendar"
router.route("/")
  .get(calendarController.findAll)
  .post(calendarController.create)
  .put(calendarController.update);

// Matches with "/api/calendar/:id"
router
  .route("/:id")
  .get(calendarController.findById)
  .put(calendarController.update)
  .delete(calendarController.remove);

module.exports = router;