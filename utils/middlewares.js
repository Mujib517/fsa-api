const userRepository = require('../repositories/userRepository');
const { comparePasswords } = require('./auth');

//middelware
async function basicAuth(req, res, next) {
    const authorization = req.headers.authorization;

    const tokens = authorization.split(' ');  // ["Basic", "ayzsksks2"]
    const credentials = tokens[1];
    const decodedString = new Buffer(credentials, 'base64').toString();

    const decodedCredentials = decodedString.split(':'); // ['abc','password123']
    const username = decodedCredentials[0];
    const password = decodedCredentials[1];

    const user = await userRepository.getUser({ username, password });
    if (user) {
        const result = comparePasswords(user.password, password);
        if (result) next();
        else res.status(401).send("Unauthorized");
    }
    else res.status(401).send("Unauthorized");
}

module.exports = {
    basicAuth
}