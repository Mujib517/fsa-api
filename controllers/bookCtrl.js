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


const post = (req, res) => {
    const book = req.body;
    books.push(book);

    res.status(201).send();
}

const getById = (req, res) => {
    const id = +req.params.id;
    let book;
    for (let i = 0; i < books.length; i++) {
        if (id === books[i].id) book = books[i];
    }
    if (book) res.status(200).send(book);
    else res.status(404).send("Not found");
};

const remove = (req, res) => {
    const id = +req.params.id;

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books.splice(i, 1);
        }
    }

    res.status(204).send();
}

const update = (req, res) => {
    const id = +req.params.id;
    const book = req.body;

    for (let i = 0; i < books.length; i++) {
        if (books[i].id === id) {
            books[i].name = book.name;
            books[i].price = book.price;
        }
    }

    res.status(204).send();
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