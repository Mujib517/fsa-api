const Book = require('../models/bookModel');
const bookRepository = require('../repositories/bookRepository');
const reviewRepository = require('../repositories/reviewRepository');
const bookService = require('../services/bookService');
const logger = require('../utils/appLogger');

const formatRating = (data) => {
    if (data && data.length > 0) {
        return parseInt(data[0].avgRating);
    }
}

const get = async (req, res) => {
    try {
        logger.info("request arrived");
        logger.info(req);
        const options = {
            page: +req.params.page || 0,
            limit: +req.params.limit || 10,
            sort: req.query.sort || 'updatedAt',
            direction: req.query.direction || 'desc',
            search: req.query.search || ''
        }
        const response = await bookService.getAll(options);
        res.status(200).json(response);
        logger.info(res);
    } catch (e) {
        logger.error(e);
        // TODO: Logging
        res.status(500);
        res.send("Internal Server Error");
    }
};

const post = async (req, res) => {
    try {
        const book = req.body;
        await bookRepository.add(book);

        res.status(201);
        res.send("Created");
    } catch (e) {
        if (e.name === "ValidationError") {
            res.status(400).send(e);
        } else {
            res.status(500).send("Internal Server Error");
        }
    }
}

const getById = async (req, res) => {
    const id = req.params.id;
    const book = await bookRepository.getById(id)
    const reviews = await reviewRepository.getByBookId(id);
    const avgRating = await reviewRepository.getAvgRating(id);
    const jsonBook = book.toJSON();
    jsonBook.reviews = reviews;
    jsonBook.avgRating = formatRating(avgRating);

    res.status(200);
    res.json(jsonBook);
};

const remove = async (req, res) => {
    const id = req.params.id;
    await bookRepository.remove(id);

    res.status(204).send();
}

const update = async (req, res) => {
    try {
        const id = req.params.id;
        await bookRepository.update(id, req.body);

        res.status(204).send();
    } catch (e) {
        console.log(e);
        res.status(500).send("Internal Server Error");
    }
}

const patch = async (req, res) => {
    const id = req.params.id;
    const body = req.body;
    await bookRepository.patch(id, body);
    res.status(204).send();
}

module.exports = {
    get,
    getById,
    post,
    remove,
    update,
    patch
}

// create an endpoint to add a new book
// create an endpoint to see book detail by id