const bcrypt = require('bcryptjs');

function getHash(pwd) {
    return bcrypt.hashSync(pwd);
}

function comparePasswords(hashedPwd, pwd) {
    return bcrypt.compareSync(pwd, hashedPwd);
}

module.exports = {
    getHash,
    comparePasswords
}