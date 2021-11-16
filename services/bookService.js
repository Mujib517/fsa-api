const bookRepository = require('../repositories/bookRepository');

async function getAll(options) {
    options.direction = options.direction.toLowerCase() === 'desc' ? -1 : 1;
    const books = await bookRepository.getAll(options)

    const transformedBooks = books.map(book => {
        const jsonBook = book.toJSON();
        jsonBook.image = book.image ? "http://localhost:3000/" + book.image : '';
        return jsonBook;
    });

    const totalRecords = await bookRepository.count(options);

    const response = {
        metadata: {
            totalRecords: totalRecords,
            totalPages: Math.ceil(totalRecords / options.limit)
        },
        data: transformedBooks
    }

    return response;
}

module.exports = {
    getAll,
}