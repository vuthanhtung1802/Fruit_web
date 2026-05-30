const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");
const { Schema } = mongoose;

const UserSchema = new Schema({
  account: String,
  password: String,
  firstName: String,
  lastName: String,
  phoneNumber: String,
  emailAddress: String,
  address: String,
  imageAvatar: String,
  admin: { type: Boolean, default: false },
});
UserSchema.pre("save", async function (next) {
  if (!this.isModified("password")) return next();
  try {
    this.password = await bcrypt.hash(this.password, 10);
    next();
  } catch (err) {
    next(err);
  }
});

const fruitUser = mongoose.model("fruitUser", UserSchema);
module.exports = fruitUser;
