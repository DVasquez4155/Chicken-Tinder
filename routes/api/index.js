const express = require('express')
const router = express.Router()
const businesses = require("./businesses");
const controller = require('../../controllers/index')

// API Routes
router.use("/businesses", businesses);
router.post('/register', controller.createSession)
module.exports = router