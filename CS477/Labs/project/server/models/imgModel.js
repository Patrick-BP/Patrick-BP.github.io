const mongoose = require ('mongoose');

const {Schema} = mongoose

const imgSchema = new Schema({
    img:{
        data:buffer,
        contentType:String
    }
})





module.exports = mongoose.model('Image', imgSchema);