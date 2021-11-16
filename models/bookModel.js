const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const bookSchema = new Schema({
    name: {
        type: String, minLength: [3, "atleast 3 characters"],
        maxlength: [20, 'atmost 20 characters'],
        required: [true, "Book name is required"]
    },
    price: {
        type: Number, required: [true, "Price is required"],
        validate: {
            validator: function (val) {
                return val > 0 && val < 1000;
                // return /\d{10}/.test(val);
            },
            message: 'Invalid price'
        }
    },
    image: { type: String },
    createdAt: { type: Date, default: Date.now() },
    updatedAt: { type: Date, default: Date.now() }
});

module.exports = mongoose.model('book', bookSchema);