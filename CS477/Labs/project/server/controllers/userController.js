const User = require('../models/userModel');

const Response = require('../models/responseobj');

exports.getAllUsers = async (req, res, next) => {
    res.json(await User.find());
    
}
exports.saveUser = async (req, res, next) => {
        const user = await new User(req.body).save();
        User.followers = [];
        res.status(201).json(new Response(false,null, user));
   
    
    }



