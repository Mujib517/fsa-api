const Review = require('../models/reviewModel');

function add(data) {
    const review = new Review(data);
    return review.save();
}

function getByBookId(id) {
    return Review.find({ bookId: id }, { __v: 0, _id: 0 });
}

module.exports = {
    add,
    getByBookId
}