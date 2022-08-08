const User = require('../models/userModel');
const Response = require('../models/responseobj');

exports.getAllUsers = async (req, res, next) => {
    
   
    res.json(await User.find({$text: {$search : req.query.search}}));
    
}

    exports.saveUser = async (req, res, next) => {
        // console.log(req.body);
        let newAccount = await new User(req.body).save()
       res.status(201).json( new Response(false, null, newAccount)); 
        }


    exports.saveFollower = async (req, res, next) => {
        // console.log(req.body);
       const updatefollowers = await User.findByIdAndUpdate({_id: req.body.userId},{$push:{followers:req.body.followerId}});
      
        res.status(201).json(new Response(false,null, updatefollowers));
    
    };

    exports.getUserInfo = async (req, res, next)=>{
        const find = await User.findOne({_id: req.params.id});
        res.status(201).json(new Response(false,null, find));
    }


    exports.deleteUser = async (req, res, next)=>{
        const del = await User.findOneAndDelete({_id:req.params.id});
        
        res.status(201).json(new Response(false, null, del));
    }