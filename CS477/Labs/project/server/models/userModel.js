const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    fullname: String,
    username: { type: String, unique: true},
    password: { type: String },
    followers:[{type: Schema.Types.ObjectId, unique:true,  ref:'User'}]
},{versionKey: false});

userSchema.index({'$**': 'text'});

module.exports = mongoose.model('User', userSchema);
