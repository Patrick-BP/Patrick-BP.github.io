const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRouter = require('./routes/userRouter');
const app = express();

app.use(cors());
app.use (express.json());
app.set('port',process.env.PORT || 3000);


app.use('/users', userRouter); 
 


app.use((req, res, next)=>{
    res.status(404).send('PAGE NOT FOUND');
});
app.use((err, req, res, next)=>{
    res.status(500).send({error: 'API NOT SUPPORTED'});
});

mongoose.connect('mongodb://127.0.0.1:27017/twitterdb')
        .then(()=>{
            app.listen(app.get('port'), ()=> console.log('Listening to '+ app.get('port')))
        });