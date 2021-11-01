// REST API
// modules
// es6 modules
// commonjs
// listen tcp number
// 80, 443
const http = require('http');
const PORT = 3000;

function handler(req, res) {
    switch (req.url) {
        case '/':
            res.write("Hello Nodejs");
            break;
        case '/books':
            const books = [{ id: 1, name: 'Clean Code', price: 100 },
            { id: 2, name: 'Clean Coder', price: 100 },
            { id: 3, name: 'Clean Architecture', price: 20 }]

            res.write(JSON.stringify(books));
            break;

        case '/authors':
            res.write("Authors");
            break;

        default:
            res.write("Not found");
    }
    res.end();
}

const server = http.createServer(handler);

server.listen(PORT, () => {
    console.log("Server is running on port ", PORT);
});
