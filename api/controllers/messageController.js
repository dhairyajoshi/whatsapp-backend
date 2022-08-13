const Message = require('../models/messageModel')
const userModel = require('../models/userModel')
const mongoose=require('mongoose')

module.exports.send = async(req,res,next)=>{
    const sender = req.body.sender
    const receiver = req.body.receiver
    const message= req.body.message
    const time= req.body.time

    const msg = new Message({
        _id: mongoose.Types.ObjectId(),
        receiver:receiver,
        sender:sender,
        message:message,
        time:time,
    })

    await msg.save();

    const rec=await userModel.findOne({phoneNo:receiver}).exec()
    const sen= await userModel.findOne({phoneNo:sender}).exec()

    rec.messages.push(msg._id)
    sen.messages.push(msg._id)
    rec.save()
    sen.save()
}

module.exports.get= async (req,res,next)=>{
    const messages=await Message.find(
        {
            $or:[
                {$and:[{sender:req.body.c1,receiver:req.body.c2}]},
                {$and:[{sender:req.body.c2,receiver:req.body.c1}]}
            ]
        }
    ).exec();

    res.send(messages);
}