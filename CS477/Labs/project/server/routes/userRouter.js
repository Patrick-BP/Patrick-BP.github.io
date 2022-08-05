const express = require('express');

const userController = require('../controllers/userController');
const authController = require('../controllers/authController');

const router = express.Router();

router.post('/', userController.saveUser);
router.post('/', userController.saveFollower);
router.get('/', userController.getAllUsers);


// router.get('/:userId/follower/:followerId',userController.getFollower);

module.exports = router;