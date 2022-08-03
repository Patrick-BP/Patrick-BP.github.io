const Users = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
    res.json(await Users.find());
    
}
exports.saveUser = async (req, res, next) => {
    try{
        const user =  new Users(req.body).save()
        Users.followers = [];
        res.json(await user);
    }catch(err){
        res.send('username is already used. Try again')
    }
    
    }



