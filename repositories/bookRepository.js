const Book = require('../models/bookModel');

function getAll() {
    return Book.find();
}

module.exports = {
    getAll
}
