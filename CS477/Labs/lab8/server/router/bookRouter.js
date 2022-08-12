const booksController = require('../controller/booksController');
const authController = require('../controllers/authController');
const express = require('express');

const router = express.Router();
router.use(authController.authenticate);

router.get('/',booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', booksController.save);
router.put('/:id', booksController.update);
router.delete('/:id', authController.authorize, booksController.deleteById);

module.exports = router;