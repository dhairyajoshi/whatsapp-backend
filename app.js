const express= require('express')
const users= require('./api/routes/users')
const mongoose = require('mongoose')
const bodyParser=require('body-parser')
require('dotenv').config();
mongoose.connect(
    "mongodb+srv://dhairya:" +
      process.env.MongoPW +
      "@cluster0.vpuxf.mongodb.net/?retryWrites=true&w=majority"
  );

const app= express()
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use('/user',users)

app.get('/',(req,res,next)=>{
    res.send('yes')
})

module.exports=app