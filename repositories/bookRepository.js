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

function remove(id) {
    return Book.remove({ _id: id });
}

function update(id, data) {
    // Update books set name=name, price = price where _id = id 
    return Book.update({ _id: id }, {
        $set: { name: data.name },
        $set: { price: data.price }
    });
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    remove,
}
