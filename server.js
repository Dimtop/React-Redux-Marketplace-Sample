const cors = require('cors');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const dotenv = require('dotenv');
const authMiddleware = require('./middlewares/auth.js');
const checkLoginMiddleware = require('./middlewares/checkLogin.js');
const userInfoMiddleware = require('./middlewares/userInfoMiddleware');
const express = require('express');
const app = express();


dotenv.config();

app.use(cors());
app.use(bodyParser.urlencoded({extended:true}));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/login', authMiddleware);
app.get('/api/login', checkLoginMiddleware);

app.get('/api/users', userInfoMiddleware);

app.listen(5000, (err)=>{
    if(err){
        console.log(err);
    }
    else{
        mongoose.connect(process.env.DB_URI,{useNewUrlParser:true,useUnifiedTopology:true},(err)=>{
            if(err){
                console.log(err);
                return;
            }
            else{
                console.log('DB connected.');
            }
        });
        console.log("Server is up.");
    }
});
