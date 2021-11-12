const User = require('../models/userModel');

function add(data) {
    const user = new User(data);
    return user.save();
}

function getUser(data) {
    const where = { username: data.username, password: data.password };
    return User.findOne(where);
}

module.exports = {
    add,
    getUser
}