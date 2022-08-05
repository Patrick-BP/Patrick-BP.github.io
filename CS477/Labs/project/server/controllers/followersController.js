const Followers = require('../models/followers');

const Response = require('../models/responseobj');

exports.saveFollower = async (req, res, next) => {
    const follower = await new Followers(req.body).save();
    
    res.status(201).json(new Response(false,null, follower));

};