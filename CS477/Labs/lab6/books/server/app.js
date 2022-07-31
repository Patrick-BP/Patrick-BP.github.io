
const express = require('express');
const cors = require('cors');
const {mongoConnect} = require('./util/database');
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

mongoConnect(()=>{
    app.listen(app.get('port'));
});

