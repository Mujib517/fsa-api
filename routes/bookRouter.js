const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');

const router = express.Router();

router.get('/api/books', bookCtrl.get);
router.get('/api/books/:id', bookCtrl.getById);
router.post('/api/books', bookCtrl.post);
router.delete('/api/books/:id', bookCtrl.remove);
router.put('/api/books/:id', bookCtrl.update);

module.exports = router;