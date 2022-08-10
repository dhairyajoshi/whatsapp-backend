const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  receiver: String,
  sender: String,
  message: String,
  time: String,
});

module.exports = mongoose.model("WaMessage", MessageSchema);
