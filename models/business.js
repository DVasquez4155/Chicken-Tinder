const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const businessSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    image_url: {
        type: String,
        required: true
    },
    url: {
        type: String,
        required: true
    },
    rating: {
        type: String,
        required: true
    },
    price: {
        type: String,
    },
    location: {
        type: String,
    },
    phone: {
        type: String,
    },
    display_phone: {
        type: String,
    },
    distance: {
        type: String,
    },

    transactions: [{
        type: String,
    }],
    categories: [{
        type: String,
    }],
});

const Business = mongoose.model("Business", businessSchema);

module.exports = Business;