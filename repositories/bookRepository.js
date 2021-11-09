const Book = require('../models/bookModel');

function getAll(page, limit, sort, direction) {
    return Book.find({}, { __v: 0 })
        .sort({ [sort]: direction })
        .skip(page * limit)
        .limit(limit);
}

function count() {
    return Book.count();
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
        $set: { name: data.name, price: data.price }
    });
}

function patch(id, data) {
    delete data._id;
    return Book.update({ _id: id }, {
        $set: data
    });
}

module.exports = {
    getAll,
    getById,
    add,
    update,
    patch,
    remove,
    count,
}
