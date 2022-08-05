const User = require('../models/userModel');
const Response = require('../models/responseobj');

exports.getAllUsers = async (req, res, next) => {
    
    // res.json(await User.find({username:{$search: req.query.search}}));
    res.json(await User.find({$text: {$search : req.query.search}}));
    
}
exports.saveUser = async (req, res, next) => {
        const user = await new User(req.body).save();
      user.followers.push(user._id);
      
        res.status(201).json(new Response(false,null, user));
   
    
    }

    exports.saveFollower = async (req, res, next) => {
        
       const updatefollowers = await User.findByIdAndUpdate({_id: req.body.userId},{$push:{follwers:req.body.followerId}});
      
        res.status(201).json(new Response(false,null, updatefollowers));
    
    };