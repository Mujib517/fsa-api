const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: { type: String, minLength: 3, maxlength: 20, required: true },
    price: {
        type: Number, required: true,
        validate: {
            validator: function (val) {
                return val > 0 && val < 1000;
                // return /\d{10}/.test(val);
            }
        }
    },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('book', bookSchema);