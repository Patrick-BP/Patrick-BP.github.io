"use strict";
/* eslint-disable */
const express = require('express');
const Productcontroller = require('../controller/productController');


const router = express.Router();

router.get('/',Productcontroller.getAll);
router.get('/:id',Productcontroller.getById);

module.exports = router;