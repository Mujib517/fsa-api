const User = require('../models/userModel');
const auth = require('../utils/auth');

function add(data) {
    const hashedPwd = auth.getHash(data.password);
    const user = new User({ username: data.username, password: hashedPwd });
    return user.save();
}

function getUser(data) {
    const where = { username: data.username };
    const projection = { __v: 0 };
    return User.findOne(where, projection);
}

module.exports = {
    add,
    getUser
}