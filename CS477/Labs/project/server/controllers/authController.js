const User = require('../models/userModel');
const Response = require('../models/responseobj')
exports.login = async (req, res, next)=>{
    const {username, password} = req.body;

    if(username && password){
        const result = await User.findOne({username, password});
        if(result){
            
         const accessToken = jwt.sign({
                id: result._id,
                username: result.username,
                iat: Date.now()
            }, SECRET);

            res.status(200).json(new Response (false, null, {accessToken}));
        }else{
            res.status(404).json(new Response(true, 'Invalid username and password', null))
        }
    }else{
        res.status(404).json(new Response(true, "Please enter username and password", null))
    }

}


