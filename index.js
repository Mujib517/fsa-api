const express = require('express');
const defaultRouter = require('./routes/defaultRouter');
const bookRouter = require('./routes/bookRouter');
const bodyParser = require('body-parser');

const PORT = 3000;
const app = express();

app.listen(3000, () => console.log("Server is running on ", PORT));

app.use(bodyParser.json());

// route
// endpoint
app.use(defaultRouter);
app.use(bookRouter);
