const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const apiRouter = require('./routes/api');
const config = require('./config');
const app = express();
require('./db');
app.use(cors(config));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use('/api',apiRouter);

app.get('/',(req, res) => {
    res.send('Hola Mundo');
});


app.listen(5000,()=>{
    console.log('Hola Mundo');
});