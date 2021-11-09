const bookRepository = require('../repositories/bookRepository');

async function getAll(page, limit) {
    const books = await bookRepository.getAll(page, limit)
    const totalRecords = await bookRepository.count();

    const response = {
        metadata: {
            totalRecords: totalRecords,
            totalPages: Math.ceil(totalRecords / limit)
        },
        data: books
    }

    return response;
}

module.exports = {
    getAll,
}