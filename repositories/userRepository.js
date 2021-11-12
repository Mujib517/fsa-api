const User = require('../models/userModel');

function add(data) {
    const user = new User(data);
    return user.save();
}

module.exports = {
    add
}