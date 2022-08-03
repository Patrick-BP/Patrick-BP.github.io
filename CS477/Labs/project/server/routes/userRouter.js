const express = require('express');

const userController = require('../controllers/userController');

const router = express.Router();

router.post('/', userController.saveUser);
router.get('/', userController.getAllUsers);
router.post('/', userController.saveUser);

// router.get('/:userId/follower/:followerId',userController.getFollower);

module.exports = router;