const express = require('express');
const userCtrl = require('../controllers/userCtrl');
const router = express.Router();

router.post('/register', userCtrl.register);
// api/users/login
router.post('/login', userCtrl.login);

module.exports = router;