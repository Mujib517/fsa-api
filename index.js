const express = require('express');
const defaultRouter = require('./routes/defaultRouter');
const bookRouter = require('./routes/bookRouter');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const morgan = require('morgan');
const fs = require('fs');
const path = require('path');
const config = require('./config');


const PORT = 3000;
const app = express();

app.listen(3000, () => console.log("Server is running on ", PORT));

const env = process.env.NODE_ENV;
const dbHost = config[env].dbHost;

console.log(dbHost);

mongoose.connect(dbHost, () => {
    console.log("Db connected");
});

function middleware(req, res, next) {
    console.log('inside middleware');
    next();
}

// request logging
// application logging

app.use(bodyParser.json());

const fileStream = fs.createWriteStream(path.join(__dirname, 'logs', 'request.log'), { flags: 'a' });

app.use(morgan('dev'));
app.use(morgan('combined', { stream: fileStream }));

// debug
// info
// warn
// error
// singleton


// route
// endpoint
app.use(defaultRouter);
app.use(middleware);
app.use(bookRouter);
