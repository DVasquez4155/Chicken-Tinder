const uuidv4 = require('uuid');

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
        console.log(req.body)
        db.User
        .create({
            users: [{
                name: "",
                id: userId
            }],
            uuid: sessionId,
            zipcode: ""
        })
        .then(
            res.redirect('/app/' + userId)
        )
        .catch(err => res.status(422).json(err));
    }
}