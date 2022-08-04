const createError = require('http-errors');
const express = require('express');
const path = require('path');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser'); 
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const mongoose = require('mongoose');
const User = require('./models/user');
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
    
    const checkuser = await User.find({email: req.body.email});

    if (!checkuser.length) return res.send({data: {success: false}});

    res.send({data: {success: true}});

};

const register = async(req, res, next) => {
    try {

        //validasi email
        const checkuser = await User.find({email: req.body.email});
        if (checkuser.length) return res.send({data: {success: false, message: "User dengan email "+ req.body.email+" sudah terdaftar "}});
    
        const userData = req.body;
        const pass = userData.password;
        delete userData.password;

        const user = new User(userData);
        user.setPassword(pass);
        user.save(async (err, newUser) => {
            if (err)
              return new ErrorHandler(404, "Failed to create User", [], res);
            res.status(200).json(newUser);
        });

      } catch (e) {
        next(e);
      }

};

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/user', (req, res) => {
  res.send('Hello ini user')
})

app.post('/user/login', login)
app.post('/user/register', register)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})