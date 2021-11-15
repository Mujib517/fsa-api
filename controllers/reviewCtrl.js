const reviewRepository = require('../repositories/reviewRepository');

async function add(req, res) {
    await reviewRepository.add(req.body);
    res.status(201).send("Created");
}

module.exports = {
    add
}