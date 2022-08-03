
const Users = require('../models/userModel');

exports.getAllUsers = async (req, res, next) => {
    res.json(await Users.find());
    
}
exports.saveUser = async (req, res, next) => {
    const usr = await Users.findOne({username: req.body.username});
    
    if(usr){
        res.send('username is already taken');
    }else{
        res.json(await new Users(req.body).save());
    }
}


