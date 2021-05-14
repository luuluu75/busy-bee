const router = require("express").Router();
const userController = require("../../controllers/userController");
const db = require("../../models");

router.get("/createUser", (req, res) => {
  //res.send("it works")
    db.UserProfile
      .create(userController.findAll)
      .then(dbModel => res.json(dbModel))
      .catch(err => res.status(422).json(err));
}) 
// Matches with "/api/user"
// router.route("/")
//   .get(userController.findAll)
//   .post(userController.create)
//   .put(userController.update);

// Matches with "/api/user/:id"
// router
//   .route("/:id")
//   .get(userController.findById)
//   .put(userController.update)
//   .delete(userController.remove);

module.exports = router;
