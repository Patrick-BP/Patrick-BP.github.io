const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true},
    followers: [{type: Schema.Types.ObjectId, ref:'User'}]
},{versionKey: false});
userSchema.index({'$**': 'text'});
module.exports = mongoose.model('User', userSchema);
