const { v4: uuidv4 } = require('uuid');

const db = require("../models");

// Defining methods for the booksController
module.exports = {

    findAll: function(req, res) {
        db.Business
        .find(req.query)
        .sort({ date: -1 })
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    create: function(req, res) {
        db.Business
        .create(req.body)
        .then(dbModel => res.json(dbModel))
        .catch(err => res.status(422).json(err));
    },
    createSession: (req,res) => {
        const sessionId = uuidv4();
        const userId = uuidv4();
        db.User
        .create({
            users: [{
                name: req.body.name.trim(),
                id: userId
            }],
            uuid: sessionId,
            zipcode: parseInt(req.body.zip)
        })
        .then(() => res.json(userId))
        .catch(err => res.status(422).json(err))
    },
    joinSession: (req,res) => {
        db.User
        .findOne({
            uuid: req.body.id,
        })
        .then(result => res.json(result))
        .catch(err => res.status(422).json(err))
    }
}