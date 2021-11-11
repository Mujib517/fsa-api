const winston = require('winston');
const path = require('path');

const logger = winston.createLogger({
    level: 'info',
    format: winston.format.json(),
    transports: [
        // new winston.transports.Console()
        new winston.transports.File({ filename: path.join(__dirname, '..', 'logs', 'app.log'), level: 'info' }),
        // new winston.transports.File({ filename: 'combined.log' }),
    ]
});

module.exports = logger;
