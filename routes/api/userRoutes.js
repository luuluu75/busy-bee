const router = require("express").Router();
const userController = require("../../controllers/calendarItemsController");

// Matches with "/api/user"
router.route("/")
  .get(userController.findAll)
  .post(userController.create)
  .put(userController.update);

// Matches with "/api/user/:id"
router
  .route("/:id")
  .get(userController.findById)
  .put(userController.update)
  .delete(userController.remove);

module.exports = router;
