const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const cors = require('cors');
const twitesRouter = require('./routes/twitesRouter')

const userRouter = require('./routes/userRouter');
const authRouter = require('./routes/authRouter');



const app = express();

app.use(cors());
app.use (express.json());


app.set('port',process.env.PORT || 3000);
app.use(express.static(path.join(__dirname, '..', 'client', 'public')));

app.use(authRouter);
app.use('/users',  userRouter); 
app.use('/twites', twitesRouter);



app.use((err, req, res, next)=>{
    res.status(500).send({error: 'API NOT SUPPORTED'});
});

mongoose.connect('mongodb://127.0.0.1:27017/twitterdb')
        .then(()=>{
            app.listen(app.get('port'), ()=> console.log('Listening to '+ app.get('port')))
        });