const Review = require('../models/reviewModel');

function add(data) {
    const review = new Review(data);
    return review.save();
}

module.exports = {
    add
}