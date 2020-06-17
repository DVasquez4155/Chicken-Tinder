const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const userSchema = new Schema({
    name: {
        type: String,
        required: true
    },
    id: {
        type: String,
        required: true,
        unique: true
    },
    //ID
    yes: [{
        type: String,
    }],
    no: [{
        type: String,
    }],
    bookmarks: [{
        type: String,
    }]

});

const User = mongoose.model("User", userSchema);

module.exports = User;