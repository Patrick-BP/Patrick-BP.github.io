const Users = require('../models/userModel');

const Response = require('../models/responseobj');

exports.getAllUsers = async (req, res, next) => {
    res.json(await Users.find());
    
}
exports.saveUser = async (req, res, next) => {
    
        const user = await new Users(req.body).save();
        Users.followers = [];
        res.status(201).json(new Response(false,null, user));
   
    
    }



