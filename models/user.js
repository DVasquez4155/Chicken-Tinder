const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
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
    no: [{
        type: String,
        required: true
    }],
    bookmarks: [{
        type: String,
        required: true
    }]

});

const User = mongoose.model("User", userSchema);

module.exports = User;