const express= require('express')

const app= express()

// app.use('morgan-dev')

app.get('/',(req,res,next)=>{
    res.send('yes')
})

module.exports=app