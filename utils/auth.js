const bcrypt = require('bcryptjs');

function getHash(pwd) {
    return bcrypt.hashSync(pwd);
}

module.exports = {
    getHash
}