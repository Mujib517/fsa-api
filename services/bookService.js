const bookRepository = require('../repositories/bookRepository');

async function getAll(options) {
    options.direction = options.direction.toLowerCase() === 'desc' ? -1 : 1;
    const books = await bookRepository.getAll(options)
    const totalRecords = await bookRepository.count(options);

    const response = {
        metadata: {
            totalRecords: totalRecords,
            totalPages: Math.ceil(totalRecords / options.limit)
        },
        data: books
    }

    return response;
}

module.exports = {
    getAll,
}