
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
const books = [{ id: 1, name: 'Clean Code', price: 100 },
{ id: 2, name: 'Clean Coder', price: 100 },
{ id: 3, name: 'Clean Architecture', price: 20 }];


const get = (req, res) => {
    // res.status(200);
    // res.json(books);
    res.status(200).json(books);
};

const post = (req, res) => {
    const book = req.body;
    books.push(book);

    res.status(201).send();
}

module.exports = {
    get,
    post
}

// create an endpoint to add a new book