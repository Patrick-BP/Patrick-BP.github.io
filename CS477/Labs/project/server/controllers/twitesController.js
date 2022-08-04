const Twite = require('../models/twitesModel');
const Response = require('../models/responseobj');

exports.getAll = async (req, res, next) =>{
const twite = await Twite.find();
res.status(200).json(new Response(false, null, twite));
};

exports.save = async (req, res, next) =>{
    
    const twite = await new Twite(req.body).save();
    res.status(200).json(new Response(false, null, twite));
    };