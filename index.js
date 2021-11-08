const express = require('express');
const defaultRouter = require('./routes/defaultRouter');
const bookRouter = require('./routes/bookRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');

const PORT = 3000;
const app = express();

app.listen(3000, () => console.log("Server is running on ", PORT));

mongoose.connect('mongodb://localhost:27017/fsa', () => {
    console.log("Db connected");
});

app.use(bodyParser.json());

// route
// endpoint
app.use(defaultRouter);
app.use(bookRouter);
