const Review = require('../models/reviewModel');

function add(data) {
    const review = new Review(data);
    return review.save();
}

function getByBookId(id) {
    return Review.find({ bookId: id }, { __v: 0, _id: 0 });
}

function getAvgRating(bookId) {
    return Review.aggregate([
        { $match: { bookId: bookId } },
        { $group: { _id: '$bookId', rating: { $avg: '$rating' } } },
        { $project: { _id: 0, avgRating: '$rating' } }
    ]);
}

module.exports = {
    add,
    getByBookId,
    getAvgRating
}