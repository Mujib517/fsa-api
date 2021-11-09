const bookRepository = require('../repositories/bookRepository');

async function getAll(page, limit, sort = 'updatedAt', direction = 'desc') {
    direction = direction.toLowerCase() === 'desc' ? -1 : 1;
    const books = await bookRepository.getAll(page, limit, sort, direction)
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