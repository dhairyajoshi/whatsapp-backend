const mongoose = require("mongoose");

const MessageSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  receiver: String,
  sender: String,
  message: String,
  time: String,
});

module.exports = mongoose.model("WaMessage", MessageSchema);
