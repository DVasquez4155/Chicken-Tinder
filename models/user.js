const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    users: [{
        name: {
            type: String,
            required: true
        },
        id: {
            type: String,
            required: true
        },
        //ID
        yes: [{
            type: String,
            required: true
        }],
        maybe: [{
            type: String,
            required: true
        }],
        favorites: [{
            type: String,
            required: true
        }]
    }],
    uuid: {
        type: String, 
        required: true
    },
    zipcode: {
        type: Number,
        required: true
    }

});

const User = mongoose.model("User", userSchema);

module.exports = User;