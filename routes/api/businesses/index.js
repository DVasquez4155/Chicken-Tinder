var express = require("express");
var router = express.Router();
const controller = require("../../../controllers/index");
const db = require("./Example.json");

// API Routes
// router.route("/").get((req, res) => {
//   res.send(db.businesses);
// });


router.route("/bookmark")
.post(controller.bookmark)
.delete(controller.removeBookmark);

router.post("/yes", controller.yes);
router.post("/no", controller.no);
router.post("/undo", controller.undo);
module.exports = router;
