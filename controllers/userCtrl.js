const userRepository = require('../repositories/userRepository');

function userExists(e) {
    return e.message && e.message.indexOf("duplicate key error") > -1
}

async function register(req, res) {
    try {

        const data = req.body;
        await userRepository.add(data);

        res.status(201).send("Created");
    } catch (e) {
        if (userExists(e))
            res.status(400).send("User already exists");
        else
            res.status(500).send("Internal Server Error");
    }
}


module.exports = {
    register
}
