const userRepository = require('../repositories/userRepository');
const jwt = require('jsonwebtoken');

function userExists(e) {
    return e.message && e.message.indexOf("duplicate key error") > -1
}

async function register(req, res) {
    try {
        const data = req.body;
        await userRepository.add(data);

        res.status(201).send("Created");
    } catch (e) {
        console.log(e);
        if (userExists(e))
            res.status(400).send("User already exists");
        else
            res.status(500).send("Internal Server Error");
    }
}

async function login(req, res) {
    const user = await userRepository.getUser(req.body);
    if (user) {
        const token = jwt.sign({ username: user.username }, 'secret', { expiresIn: '1h' });
        res.status(200).send(token);
    }
    else res.status(401).send("Unauthorized");
}


module.exports = {
    register,
    login
}
