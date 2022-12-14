const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  _id: mongoose.Schema.Types.ObjectId,
  name: String,
  phoneNo: { type: String, unique: true },
  bio: String,
  contacts: [{ type: mongoose.Schema.Types.ObjectId, ref: "WaUser" }],
  messages: [{ type: mongoose.Schema.Types.ObjectId, ref: "WaMessage" }],
  socketId: String,
});

module.exports = mongoose.model("WaUser", userSchema);
