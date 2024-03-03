const mongoose = require("mongoose");

const AuthSchema = new mongoose.Schema(
  {
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
  },
  {
    collection: "userAuth",
    versionKey: false,
  }
);

const AuthModel = mongoose.model("UserAuth", AuthSchema); // Changed the model name to "UserAuth"

module.exports = AuthModel;
