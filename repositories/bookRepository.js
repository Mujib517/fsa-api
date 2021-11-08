const Book = require('../models/bookModel');

function getAll() {
    return Book.find({}, { '__v': 0 });
}

function add(data) {
    const book = new Book(data);
    return book.save();
}

function getById(id) {
    // SELECT * FROM BOOKS WHERE _ID = ID
    return Book.findOne({ _id: id }, { __v: 0 });
}

module.exports = {
    getAll,
    getById,
    add,
}
