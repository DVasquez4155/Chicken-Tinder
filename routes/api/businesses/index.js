var express = require('express')
var router = express.Router()

const db = require("./Example.json")

// API Routes
router.get("/", (req,res) => {
    res.send(db.businesses)
})

module.exports = router