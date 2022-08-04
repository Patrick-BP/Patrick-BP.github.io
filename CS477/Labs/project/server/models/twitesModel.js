const mongoose = require('mongoose');


const {Schema} = mongoose;

const tweetSchema = new Schema({
    tweet: String,
    createdDate: Date,
    user:{type:Schema.Types.ObjectId, ref:'User'}
},{timestamps:true},{versionKey: false});


module.exports = mongoose.model('Twite', tweetSchema);