const User = require('../models/userModel');
const Response = require('../models/responseobj');

exports.getAllUsers = async (req, res, next) => {
    
    // res.json(await User.find({username:{$search: req.query.search}}));
    res.json(await User.find({$text: {$search : req.query.search}}));
    
}
exports.saveUser = async (req, res, next) => {
        const user = await new User(req.body).save();
      
        res.status(201).json(new Response(false,null, user));
   
    
    }



    exports.saveFollower = async (req, res, next) => {
        const usrid =  req.body.userId;
        const fllwrId = req.body.followerId;
       const finduser = await User.find({_id: usrid}).populate('followers');
      const add = finduser.followers.push(fllwrId);
        res.status(201).json(new Response(false,null, add));
    
    };