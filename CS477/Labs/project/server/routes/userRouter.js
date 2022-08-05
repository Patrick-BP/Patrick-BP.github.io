const express = require('express');

const userController = require('../controllers/userController');
const followerController = require('../controllers/followersController');

const router = express.Router();

router.post('/', userController.saveUser);
router.post('/', followerController.saveFollower);
router.get('/', userController.getAllUsers);


// router.get('/:userId/follower/:followerId',userController.getFollower);

module.exports = router;