const express= require('express')
const users= require('./api/routes/users')
const messages= require('./api/routes/messages')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
const morgan=require('morgan')
require('dotenv').config();
mongoose.connect(
    "mongodb+srv://dhairya:" +
      process.env.MongoPW +
      "@cluster0.vpuxf.mongodb.net/?retryWrites=true&w=majority"
  );
 
const app= express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user',users)
app.use('/messages',messages)

module.exports=app 