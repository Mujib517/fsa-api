
const get = (req, res) => {
    const books = [{ id: 1, name: 'Clean Code', price: 100 },
    { id: 2, name: 'Clean Coder', price: 100 },
    { id: 3, name: 'Clean Architecture', price: 20 }];

    // res.status(200);
    // res.json(books);
    res.status(200).json(books);
};

module.exports = {
    get
}