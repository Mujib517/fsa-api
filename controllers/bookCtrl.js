const Book = require('../models/bookModel');
const bookRepository = require('../repositories/bookRepository');
// REST
// concept
// everything is a resource
// 1. Uniform interface
// get: read (safe operation)
// post: creating
// put: updating
// delete: deleting
// patch : partially updating
// 2. stateless (sessions) scalable
// 3. cacheability 
// 4. layered system
// drivers ORM (Object relational mapper) ODM
// mongoose
const books = [{ id: 1, name: 'Clean Code', price: 100 },
{ id: 2, name: 'Clean Coder', price: 100 },
{ id: 3, name: 'Clean Architecture', price: 20 }];


const get = async (req, res) => {
    try {
        const books = await bookRepository.getAll()
        res.status(200);
        res.json(books);
    } catch (e) {
        // TODO: Logging
        res.status(500);
        res.send("Internal Server Error");
    }
};

const post = async (req, res) => {
    const book = req.body;
    await bookRepository.add(book);

    res.status(201);
    res.send("Created");
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

module.exports = {
    get,
    getById,
    post,
    remove,
    update
}

// create an endpoint to add a new book
// create an endpoint to see book detail by id