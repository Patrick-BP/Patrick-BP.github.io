const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/', userController.saveUser);
router.post('/follow', userController.saveFollower);
router.get('/', userController.getAllUsers);




module.exports = router;