const express = require("express");
const router = express.Router();
const businesses = require("./businesses");
const controller = require("../../controllers/index");

// API Routes
router.use("/businesses", businesses);
router.get("/user", controller.getuser);
router.get("/group", controller.getGroup);
router.post("/register", controller.createSession);
router.post("/join", controller.joinSession);
module.exports = router;
