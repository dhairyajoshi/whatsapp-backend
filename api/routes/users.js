const express = require("express");

const router = express.Router();
const userController = require("../controllers/userController");
const authCheck = require("../middewares/authCheck");

router.get("/", authCheck, userController.getUsers);

router.post("/", userController.signUp);

module.exports = router;
