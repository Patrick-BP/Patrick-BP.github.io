"use strict";
/* eslint-disable */

const express = require('express');
const productController = require('../controller/productController');
const router = express.Router();

router.get('/',productController.getAll);
router.get('/:id',productController.getById);
router.post('/',productController.save);
router.put('/:id',productController.update);
router.delete('/:id', productController.deleteById);

module.exports = router;