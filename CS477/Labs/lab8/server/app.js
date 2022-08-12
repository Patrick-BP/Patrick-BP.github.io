
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRouter = require('./router/bookRouter');
const authRouter = require('./routes/authRouter');
const Response = require('./models/responseobj');
const app = express();


app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.use('/books', bookRouter);

app.use(authRouter);
app.use('/users', userRouter);
app.use('/books', bookRouter);


app.use((err, req, res, next)=>{
    res.status(500).json(new Response(true, err.message, null));
});

mongoose.connect('mongodb://localhost:27017/shopping')
.then(()=>{
    app.listen(app.get('port'));
});

