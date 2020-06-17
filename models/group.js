const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const groupSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    users: [{
        type: String,
        required: true
    }],
    uuid: {
        type: String, 
        required: true,
        unique: true
    },
    zipcode: {
        type: Number,
        required: true
    },
    matches: [{
        type: String, 
        required: false
    }],
    businesses: [{
        type: String,
        required: true
    }],
});

const Group = mongoose.model("Group", groupSchema);

module.exports = Group;