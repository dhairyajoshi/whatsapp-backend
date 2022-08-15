const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const mongoose = require('mongoose')

module.exports.signUp = async (req, res, next) => {
    const check = await User.findOne({ phoneNo: req.body.phoneNo });
    if (check != null){
        const token = jwt.sign(
            {
              phoneNo: check.phoneNo,
              userId: check._id,
            },
            process.env.jwt_key,
          );

        return res.status(200).json({
            msg: "logged in successfully",
            token: token,
            user: check,
          });
    }
    
  
    const user = new User({
      _id: mongoose.Types.ObjectId(),
      name: req.body.name,
      phoneNo: req.body.phoneNo,
    });
  
    await user.save();
  
    const token = jwt.sign( 
      {
        phoneNo: user.phoneNo,
        userId: user._id,
      },
      process.env.jwt_key,
    );
  
    res.status(201).json({
      msg: "user created successfully",
      token: token,
      user: user,
    });
  };

module.exports.getUsers = async (req,res,next)=>{
    const users= await User.find({phoneNo:req.body.users}).exec();

    res.json(users)
}