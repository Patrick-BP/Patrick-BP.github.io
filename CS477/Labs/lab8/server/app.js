
const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const bookRouter = require('./router/bookRouter');
const app = express();


app.use(cors());
app.use(express.json());
app.set('port', process.env.PORT || 3000);
app.use('/books', bookRouter);

app.use((req, res, next)=>{
    res.status(404).send('PAGE NOT FOUND');
});
app.use((err, req, res, next)=>{
    res.status(500).send({error: 'API NOT SUPPORTED'});
});

mongoose.connect('mongodb://localhost:27017/shopping')
.then(()=>{
    app.listen(app.get('port'));
});

