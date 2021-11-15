const mongoose = require('mongoose');

const reviewSchema = new mongoose.Schema({
    bookId: { type: String, required: true },
    name: { type: String, required: true },
    rating: { type: Number, required: true },
    subject: { type: String },
    message: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('review', reviewSchema);
