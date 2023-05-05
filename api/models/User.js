const mongoose = require("mongoose");
const { Schema, model } = mongoose;

//create user model
const UserSchema = new Schema({
  username: { type: String, required: true, min: 4, unique: true },
  password: { type: String, required: true },
});

//create model
const UserModel = model("User", UserSchema);

//export our model
module.exports = UserModel;
