const mongoose = require('mongoose');

const {Schema} = mongoose;

const bookSchema = new Schema({
    title: String,
    isbn: String,
    publishedDate: String,
    author: String
}, {versionKey: false});

const model = mongoose.model('books', bookSchema);

module.exports = model;