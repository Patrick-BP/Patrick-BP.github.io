const mongoose = require('mongoose');

const {Schema} = mongoose;

const userSchema = new Schema({
    fullname: String,
    username: { type: String, required: true, unique: true},
    password: { type: String, required: true}
    
},{versionKey: false});

userSchema.index({'$**': 'text'});

module.exports = mongoose.model('User', userSchema);
