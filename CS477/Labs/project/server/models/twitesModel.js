const mongoose = require('mongoose');


const {Schema} = mongoose;

const tweetSchema = new Schema({
    tweet: String,
    user:{type: Schema.Types.ObjectId, ref:'User'},
    createdAt: String
},{versionKey: false});


module.exports = mongoose.model('Twite', tweetSchema);