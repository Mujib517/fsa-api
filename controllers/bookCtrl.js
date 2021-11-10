const Book = require('../models/bookModel');
const bookRepository = require('../repositories/bookRepository');
const bookService = require('../services/bookService');

const get = async (req, res) => {
    console.log(req.query.search, 'search');
    try {
        const options = {
            page: +req.params.page || 0,
            limit: +req.params.limit || 10,
            sort: req.query.sort || 'updatedAt',
            direction: req.query.direction || 'desc',
            search: req.query.search || ''
        }
        const response = await bookService.getAll(options);
        res.status(200).json(response);
    } catch (e) {
        console.log(e);
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
        if (e.message === 'Validation Error') {
            res.status(400).send("Bad Request");
        } else {
            res.status(500).send(e);
        }
    }
}

const getById = async (req, res) => {
    const id = req.params.id;
    const book = await bookRepository.getById(id)
    res.status(200);
    res.json(book);
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