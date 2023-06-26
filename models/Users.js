const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "Please provide a valid name"],
  },

  password: {
    type: String,
    required: [true, "Please provide a password"],
  },
});

const UserModel = mongoose.model("User", UserSchema);

module.exports = UserModel;
