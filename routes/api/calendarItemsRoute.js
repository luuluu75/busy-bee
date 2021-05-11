const router = require("express").Router();
const calendarItemsController = require("../../controllers/calendarItemsController");

// Matches with "/api/calendarItems"
router.route("/")
  .get(calendarItemsController.findAll)
  .post(calendarItemsController.create)
  .put(calendarItemsController.update);

// Matches with "/api/calendarItems/:id"
router
  .route("/:id")
  .get(calendarItemsController.findById)
  .put(calendarItemsController.update)
  .delete(calendarItemsController.remove);

module.exports = router;

