//middelware
function basicAuth(req, res, next) {
    const authorization = req.headers.authorization;

    const tokens = authorization.split(' ');  // ["Basic", "ayzsksks2"]
    const credentials = tokens[1];
    const decodedString = new Buffer(credentials, 'base64').toString();

    const decodedCredentials = decodedString.split(':'); // ['abc','password123']

    if (decodedCredentials[0] === 'admin' && decodedCredentials[1] === 'password')
        next();
    else res.status(401).send("Unauthorized");
}

module.exports = {
    basicAuth
}