const Book = require('../models/bookModel');

function getAll() {
    return Book.find({}, { '__v': 0 });
}

function add(data) {
    const book = new Book(data);
    return book.save();
}

module.exports = {
    getAll,
    add
}
