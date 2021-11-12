const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).send("Hello World!!");
});

// 99.99%
// localhost:3000/health
// monitoring & alerting
// basic authentication
// username & password
router.get('/health', (req, res) => {
    res.status(200).json({ status: 'Up' });
});

module.exports = router;