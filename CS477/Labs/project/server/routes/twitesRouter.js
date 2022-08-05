const express = require('express');

const twitesController = require('../controllers/twitesController');
const authController = require('../controllers/authController');

const router = express.Router();


router.get('/:id', authController.authenticate, twitesController.getAll);
router.post('/',authController.authenticate, twitesController.save);



module.exports = router;