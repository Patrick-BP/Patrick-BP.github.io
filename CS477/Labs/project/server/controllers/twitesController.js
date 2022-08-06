const Twite = require('../models/twitesModel');
const User = require('../models/userModel');
const Response = require('../models/responseobj');



exports.getAll = async (req, res, next) =>{
 const user = await User.findById(req.params.id);
 const arr = user.followers;
const twite = await Twite.find({user:{$in: arr} }).sort({createdAt: -1}).populate('user');
res.status(200).json(new Response(false, null, twite));
};



exports.save = async (req, res, next) =>{
    // console.log(req.body);
    const twite = await new Twite(req.body).save();
    res.status(200).json( new Response(false, null, twite));
    };




exports.displayOneUserTweets = async (req, res, next) =>{
const mytwit = await Twite.find({user:req.params.id}).sort({createdAt: -1}).populate('user');
res.status(200).json(new Response(false, null, mytwit));
};



exports.delTweet = async (req, res, next) =>{
        const twite = await Twite.findByIdAndDelete({_id:req.params.id});
        res.status(200).json( new Response(false, null, twite));
        };    