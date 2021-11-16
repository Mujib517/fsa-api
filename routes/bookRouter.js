const express = require('express');
const bookCtrl = require('../controllers/bookCtrl');
const multer = require('multer');

const router = express.Router();

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "uploads/");
    },
    filename: function (req, file, cb) {
        var file = Date.now() + file.originalname;
        req.body.image = file;
        cb(null, file);
    }
});

var upload = multer({ storage: storage });

// router.get('/api/books', bookCtrl.get);
router.get(['/', '/page/:page/limit/:limit'], bookCtrl.get);
router.get('/:id', bookCtrl.getById);
router.post('/', upload.single('image'), bookCtrl.post);
router.delete('/:id', bookCtrl.remove);
router.put('/:id', bookCtrl.update);
router.patch('/:id', bookCtrl.patch);

module.exports = router;