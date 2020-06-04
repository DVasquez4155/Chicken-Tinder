var express = require('express')
var router = express.Router()
const businesses = require("./businesses");

// API Routes
router.use("/businesses", businesses);

module.exports = router