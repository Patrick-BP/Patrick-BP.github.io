const User = require('../models/userModel');
const Response = require('../models/responseobj');

exports.getAllUsers = async (req, res, next) => {
    
   
    res.json(await User.find({$text: {$search : req.query.search}}));
    
}

    exports.saveUser = (req, res, next) => {
        console.log(req.body);
        let prod = new User(req.body)
        prod.save()
            .then(result => {
                
                result.followers.push(prod._id);
                //console.log(result);
                res.json(prod);
            });
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