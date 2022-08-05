const mongoose = require('mongoose');

const {Schema} = mongoose;

const followersSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref:'User'},
    followers:[{type: Schema.Types.ObjectId, ref:'User'}]
},{versionKey: false});

module.exports = mongoose.model('Followers', followersSchema);