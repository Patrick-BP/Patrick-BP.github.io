const User = require('../models/userModel');
const Response = require('../models/responseobj');
 
 
 exports.getFollowed = async(req, res, next) =>{
        const follwr = await User.findById(req.params.id).populate('followers');
       
        res.status(200).json( new Response(false, null, follwr));
    };