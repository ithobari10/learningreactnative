const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const port = 3000;

const mongoUri = 'mongodb://localhost:27017/myapp';
mongoose.connect(mongoUri, {
  dbName: 'myapp',
  useNewUrlParser: true,
  useUnifiedTopology: true
});

app.use(bodyParser.urlencoded({ extended: true }));
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

const login = async(req, res, next) => {
    
    console.log(req.body.test);
    console.log('Got body:', req.body);
    res.sendStatus(200);
    // return res.send({data: []})

};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  res.send('Hello ini user')
})

app.post('/user/login', login)

app.get('/user/register', (req, res) => {
    res.send('Hello ini user')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})