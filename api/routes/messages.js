const express= require('express')

const router= express.Router()
const messageController = require('../controllers/messageController')
const authCheck= require('../middewares/authCheck')

router.post('/send',authCheck,messageController.send)

router.post('/get',authCheck,messageController.get)

module.exports=router;