const User = require('../models/userModel');
const auth = require('../utils/auth');

function add(data) {
    const hashedPwd = auth.getHash(data.password);
    const user = new User({ username: data.username, password: hashedPwd });
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