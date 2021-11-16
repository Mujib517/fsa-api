const bookRepository = require('../repositories/bookRepository');

async function getAll(options, imageHost) {
    options.direction = options.direction.toLowerCase() === 'desc' ? -1 : 1;
    const books = await bookRepository.getAll(options)

    const transformedBooks = books.map(book => {
        const jsonBook = book.toJSON();
        jsonBook.image = book.image ? `${imageHost}/${book.image}` : '';
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