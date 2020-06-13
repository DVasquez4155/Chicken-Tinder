var express = require("express");
var router = express.Router();
const controller = require("../../../controllers/index");
const db = require("./Example.json");

// API Routes
router.route("/").get((req, res) => {
  res.send(db.businesses);
});

router.route("/matches").get(controller.findAll);

router.route("/bookmark").post(controller.bookmark);
// .delete({})

router.get("/yes", (req, res) => {
  res.send(db.businesses);
});
router.get("/maybe", (req, res) => {
  res.send(db.businesses);
});
router.get("/no", (req, res) => {
  res.send(db.businesses);
});

module.exports = router;
