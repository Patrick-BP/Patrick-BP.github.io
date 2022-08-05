const Twite = require('../models/twitesModel');
const Response = require('../models/responseobj');

exports.getAll = async (req, res, next) =>{
 
const twite = await Twite.find({user:req.params.id }).sort({createdAt: -1}).populate('user');

res.status(200).json(new Response(false, null, twite));

};

exports.save = async (req, res, next) =>{
    console.log(req.body);
    const twite = await new Twite(req.body).save();
    res.status(200).json( new Response(false, null, twite));
    };