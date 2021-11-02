const express = require('express');
const defaultRouter = require('./routes/defaultRouter');
const bookRouter = require('./routes/bookRouter');

const PORT = 3000;
const app = express();

app.listen(3000, () => console.log("Server is running on ", PORT));

// route
// endpoint
app.use(defaultRouter);
app.use(bookRouter);
