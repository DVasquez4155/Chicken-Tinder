const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    date: {
        type: Date,
        default: Date.now
    },
    id: {
        type: String,
        required: true
    },
    naimage_urlme: {
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
        required: true
    },
    location: {
        type: String,
        required: true
    },
    phone: {
        type: String,
        required: true
    },
    display_phone: {
        type: String,
        required: true
    },
    distance: {
        type: String,
        required: true
    },

    transactions: [{
        type: String,
        required: true
    }],
    categories: [{
        type: String,
        required: true
    }],
});

const Book = mongoose.model("Book", bookSchema);

module.exports = Book;