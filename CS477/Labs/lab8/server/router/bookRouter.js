const booksController = require('../controller/booksController');
const authController = require('../controller/authController');
const express = require('express');

const router = express.Router();
router.use(authController.authenticate);

router.get('/',booksController.getAll);
router.get('/:id', booksController.getById);
router.post('/', booksController.save);
router.put('/:id', booksController.update);
router.delete('/:id', booksController.deleteById);

module.exports = router;